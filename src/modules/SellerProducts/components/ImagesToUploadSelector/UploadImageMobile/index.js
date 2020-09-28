import React from 'react'
import Icon from '~/src/modules/MainApp/components/Icon'
import UploadShape from '~/src/vectors/load-images.svg'
import AddShape from '~/src/vectors/add.svg'
import classes from './styles.module.scss'
import AddPhotoButton from '../../AddPhotoButton'
import ImageThumbnail from '../../Thumbnail'

const UploadImageMobile = ({ photos = [], removePhotoByIndex, handleUploadFile }) => {
  if (!photos.length) {
    return (
      <div className={classes.imagesArea}>
        <label className={classes.label}>Imágenes del producto</label>
        <label htmlFor='upload-button'>
          <div className={classes.dropzone}>
            <div className={classes.uploadInstructions}>
              <Icon icon={UploadShape} />
              <div className={classes.instructionsDetail}>
                <span className={classes.attach}>Adjuntá imágenes de tu producto</span>
                <span className={classes.limit}>Subí hasta 5 fotos</span>
              </div>
              <input
                type='file'
                id='upload-button'
                style={{ display: 'none' }}
                onChange={handleUploadFile}
                accept='image/*'
                multiple
              />
              <Icon icon={AddShape} />
            </div>
          </div>
        </label>
      </div>
    )
  }

  return (
    <div className={classes.container}>
      <label className={classes.label}>Imágenes del producto</label>
      <div className={classes.imagesAreaHidden}>
        <div className={classes.photos}>
          {
            photos.map(({ preview }, key) => (
              <ImageThumbnail
                key={`product-photo${key}`}
                src={preview}
                onDelete={() => removePhotoByIndex(key)}
              />
            ))
          }
          {
            photos.length < 5 && <AddPhotoButton handleUploadFile={handleUploadFile} />
          }
        </div>
      </div>
    </div>
  )
}

export default UploadImageMobile
