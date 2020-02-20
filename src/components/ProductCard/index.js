import React from 'react'

import './ProductCard.scss'

const time = '00:02:00'

const ProductCard = ({ productPicture, price, marketPrice, totalSold, totalSales }) => {
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
      </div>
    </div>
  )
}

export default ProductCard
