import React from 'react'
import currency from '~/src/utils/currency'
import ShippingIcon from '~/src/vectors/shipping.svg'

import classes from './styles.module.scss'

const Costs = ({ oldPrice, price }) => {
  return (
    <div className={classes.container}>
      <div className={classes.prices}>
        <span className={classes.oldPrice}>
          {currency.ARS(oldPrice)}
        </span>
        <span className={classes.currentPrice}>
          {currency.ARS(price)}
        </span>
      </div>
      <div className={classes.delivery}>
        <img src={ShippingIcon} alt='Shipping icon' />
        <span className={classes.deliveryText}>Envío gratis</span>
      </div>
    </div>
  )
}

export default Costs
