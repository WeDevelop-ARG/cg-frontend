import React from 'react'
import { useHistory } from 'react-router-dom'

import './ProductCard.scss'

const time = '00:02:00'

const ProductCard = ({ productPicture, price, marketPrice, totalSold, totalSales, productId }) => {
  const history = useHistory()

  const goToCheckout = () => {
    history.push(`/checkout/${productId}`)
  }

  return (
    <div className='ProductCard'>
      <img src={productPicture} className='ProductCard--image' alt='product' />
      <div className='ProductCard--details'>
        <div className='ProductCard--prices'>
          <span className='ProductCard--prices__market'>${marketPrice}</span>
          <span className='ProductCard--prices__price'>${price}</span>
        </div>
        <div className='ProductCard--sales'>
          <span>{`${totalSold}/${totalSales}`}</span>
          <span>{time}</span>
        </div>
        <div className='ProductCard--button'>
          <button type='button' onClick={() => goToCheckout()}>Compre Ahora</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
