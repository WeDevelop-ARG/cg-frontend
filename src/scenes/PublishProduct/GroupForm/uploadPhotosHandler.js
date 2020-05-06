import axios from 'axios'
import dayjs from 'dayjs'
import createSignedFileUploadURL from '../../../apollo/mutations/createSignedFileUploadURL'
import apolloClient from '../../../apollo/configurations/client'

const uploadToS3 = async (file, signedRequest) => {
  const options = {
    headers: {
      'Content-Type': file.type
    }
  }

  await axios.put(signedRequest, file, options)
}

const formatFilename = filename => {
  const date = dayjs().format('YYYYMMDD')
  const randomString = Math.random()
    .toString(36)
    .substring(2, 7)

  const cleanFileName = filename.toLowerCase().replace(/[^a-z0-9]/g, '-')
  const newFilename = `${date}-${randomString}-${cleanFileName}`
  return newFilename.substring(0, 60)
}

export default async (photosToUpload = []) => {
  const urls = []
  for (const photoToUpload of photosToUpload) {
    const {
      data: {
        createSignedFileUploadURL: { signedRequest, url }
      } = {}
    } = await apolloClient.mutate({
      mutation: createSignedFileUploadURL,
      variables: {
        input: {
          filename: formatFilename(photoToUpload.name),
          filetype: photoToUpload.type
        }
      }
    })

    await uploadToS3(photoToUpload, signedRequest)

    urls.push(url)
  }

  return urls
}
