import dayjs from 'dayjs'
import uploadPhotosHandler from '../../hooks/uploadPhotosHandler'

const getFiles = (array) => array.map((item) => item.raw)

const getURLs = (string) => string.trim().split('\n')

const parseDate = ({ dayExpiresAt, hourExpiresAt: hour }) => {
  const day = dayjs(dayExpiresAt)
  const expiresAtString = `${day.date()}/${day.month() + 1}/${day.year()} ${hour}`
  const expiresAt = dayjs(expiresAtString, 'D/M/YYYY h:m A').toISOString()

  return expiresAt
}

const parseInputAndUploadPhotos = async (data) => {
  const parsedURLs = getURLs(data.photoURLs)
  const amazonPhotoURLs = await uploadPhotosHandler(getFiles(data.photos))
  const productPhotosUrls = amazonPhotoURLs.concat(parsedURLs).slice(0, 5)

  const product = {
    name: data.title,
    description: data.description,
    price: data.price,
    marketPrice: data.marketPrice,
    productPhotosUrls
  }

  const group = {
    type: data.groupSize === 2 ? 'PAIR' : 'GROUP',
    minParticipants: data.groupSize,
    maxParticipants: data.groupSize,
    discount: data.discount,
    expiresAt: parseDate(data)
  }

  return { product, ...group }
}

export default parseInputAndUploadPhotos
