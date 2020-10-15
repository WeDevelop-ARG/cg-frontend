import React, { useCallback } from 'react'
import { useFormikContext } from 'formik'
import { isEmpty } from 'lodash'

import {
  normal as Input,
  multiLine as InputMultiLine
} from '~/src/modules/MainApp/components/Input'
import classes from './styles.module.scss'
import ImageSelector from '../ImagesToUploadSelector'
import PricesInput from './Prices'
import DiscountDisplay from './DiscountDisplay'

const ProductForm = ({ ...stepWizardProps }) => {
  const formik = useFormikContext()

  const handleContinue = useCallback(async () => {
    const result = await formik.validateForm()
    Object.keys(result).forEach(key => formik.setFieldTouched(key))

    if (isEmpty(result)) stepWizardProps.nextStep()
  }, [])

  return (
    <div className={classes.container}>
      <div className={classes.forms}>
        <div className={classes.productInfo}>
          <div className={classes.field}>
            <label className={classes.label}>Título</label>
            <Input
              name='title'
              placeholder='Dale un título a tu producto'
            />
          </div>
          <div className={classes.field}>
            <label className={classes.label}>Descripción</label>
            <InputMultiLine
              name='description'
              placeholder='Dale una descripción a tu producto'
            />
          </div>
          <PricesInput />
          <DiscountDisplay />
        </div>
        <div className={classes.productPhotos}>
          <ImageSelector />
          <div className={classes.imageField}>
            <label className={classes.label}>o ingresa las URL de tus imagenes separadas por comas</label>
            <InputMultiLine
              name='photoURLs'
              placeholder='Ejemplo: http://imagenes.com/imagen-1, http://imagenes.com/imagen-2'
            />
          </div>
        </div>
      </div>
      <button type='button' className={classes.continue} onClick={handleContinue}>Continuar &rsaquo;</button>
    </div>
  )
}

export default ProductForm
