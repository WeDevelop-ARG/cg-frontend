import React, { useRef } from 'react'

const LoadPhoto = ({ handleSetPhoto, photoIndex, photo = '', isRequired = true }) => {
  const uploadImage = useRef(null)
  const encodeImage = async (e) => {
    const [file] = e.target.files

    if (file) {
      const reader = new window.FileReader()
      const { current } = uploadImage
      current.file = file

      reader.onload = (e) => {
        current.src = e.target.result
        handleSetPhoto({ photo: file, photoIndex })
      }

      reader.readAsDataURL(file)
    } else {
      handleSetPhoto({ photo: '', photoIndex })
    }
  }

  return (
    <div className='Publish--image-upload'>
      <img ref={uploadImage} />
      <input
        type='file'
        accept='image/*'
        placeholder='URL de la foto'
        id='photo'
        onChange={encodeImage}
        required={isRequired}
      />
    </div>
  )
}

export default LoadPhoto
