import React from 'react'
import classes from './styles.module.scss'
import AddShape from '~/src/vectors/add.svg'
import Icon from '~/src/modules/MainApp/components/Icon'

const AddPhotoButton = ({ handleUploadFile }) => {
  return (
    <label htmlFor='upload-button' className={classes.addPhoto}>
      <Icon icon={AddShape} className={classes.add} />
      <input
        type='file'
        id='upload-button'
        style={{ display: 'none' }}
        onChange={handleUploadFile}
        accept='image/*'
        multiple
      />
    </label>
  )
}

export default AddPhotoButton
