import React, { useEffect } from 'react'
import { useFormikContext } from 'formik'

import calculatePercentage from '~/src/utils/calculatePercentage'
import classes from './styles.module.scss'

const DiscountDisplay = () => {
  const { values, setFieldValue } = useFormikContext()

  useEffect(() => {
    setFieldValue('discount', calculatePercentage(values?.marketPrice, values?.price))
  }, [values?.marketPrice, values?.price])

  return (
    <div className={classes.field}>
      <label className={classes.label}>Descuento ofrecido</label>
      <div className={classes.discountArea}>
        <span className={classes.discountText}>El descuento que ofrecés es de un</span>
        <span className={classes.discountPercentage}>
          {values?.discount}%
        </span>
      </div>
    </div>
  )
}

export default DiscountDisplay
