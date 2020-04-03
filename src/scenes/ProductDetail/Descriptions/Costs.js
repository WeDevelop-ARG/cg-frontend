import React from 'react'
import currency from '../../../utils/currency'
import ShippingIcon from '../../../vectors/shipping.svg'

const Costs = ({ oldPrice, price }) => {
  return (
    <div className='product-detail__descriptions__costs'>
      <div className='product-detail__descriptions__costs--price'>
        <span className='product-detail__descriptions__costs--price--old'>
          {currency.ARS(oldPrice)}
        </span>
        <span className='product-detail__descriptions__costs--price--current'>
          {currency.ARS(price)}
        </span>
      </div>
      <div className='product-detail__descriptions__costs--delivery'>
        <img src={ShippingIcon} alt='shipping-icon' />
        <span>Envío gratis</span>
      </div>
    </div>
  )
}

export default Costs
