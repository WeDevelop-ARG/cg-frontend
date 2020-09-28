import React from 'react'
import { useFormikContext } from 'formik'
import useMediaQuery from '~/src/hooks/useMediaQuery'
import UploadImageDesktop from './UploadImageDesktop'
import UploadImageMobile from './UploadImageMobile'

const BREAK_POINT = '(max-device-width: 576px)'

const getImageDetail = (file) => ({
  preview: URL.createObjectURL(file),
  raw: file
})

const ImageSelector = () => {
  const isMobile = useMediaQuery(BREAK_POINT)
  const { values, setFieldValue } = useFormikContext()

  const handleUploadFile = (e) => {
    if (e.target.files.length) {
      const photosToAdd = [...values?.photos]

      const PHOTO_LIMIT = 5 - photosToAdd.length

      for (let i = 0; i < e.target.files.length; i += 1) {
        if (i === PHOTO_LIMIT) break

        const file = e.target.files[i]
        photosToAdd.push(getImageDetail(file))
      }

      setFieldValue('photos', photosToAdd)
    }
  }

  const removePhotoByIndex = (index) => {
    const photosToChange = [...values?.photos]
    photosToChange.splice(index, 1)

    setFieldValue('photos', photosToChange)
  }

  if (!isMobile) {
    return (
      <UploadImageDesktop
        handleUploadFile={handleUploadFile}
        photos={values?.photos}
        removePhotoByIndex={removePhotoByIndex}
      />
    )
  }

  return (
    <UploadImageMobile
      handleUploadFile={handleUploadFile}
      photos={values?.photos}
      removePhotoByIndex={removePhotoByIndex}
    />
  )
}

export default ImageSelector
