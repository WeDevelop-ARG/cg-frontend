import React from 'react'

import { price as InputPrice } from '~/src/modules/MainApp/components/Input'
import classes from './styles.module.scss'

const PricesInput = () => {
  return (
    <div className={classes.prices}>
      <div className={classes.price}>
        <label className={classes.label}>Precio minorista</label>
        <div className={classes.separatedTop}>
          <InputPrice
            name='marketPrice'
          />
        </div>
      </div>
      <div>
        <label className={classes.label}>Precio mayorista</label>
        <div className={classes.separatedTop}>
          <InputPrice
            name='price'
          />
        </div>
      </div>
    </div>
  )
}

export default PricesInput
