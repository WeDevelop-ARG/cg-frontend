import React from 'react'

const LoadPhoto = ({ handleSetPhoto, photoIndex, photo = '' }) => {
  const encodeImage = event => {
    const reader = new window.FileReader()
    reader.onloadend = function () {
      handleSetPhoto({ photo: reader.result, photoIndex })
    }
    const file = event.target.files[0]
    if (file) {
      reader.readAsDataURL(file)
    } else {
      handleSetPhoto({ photo: '', photoIndex })
    }
  }

  return (
    <div className='Publish--image-upload'>
      {photo && <img src={photo} />}
      <input
        type='file'
        placeholder='URL de la foto'
        id='photo'
        onChange={encodeImage}
        required
      />
    </div>
  )
}

export default LoadPhoto
