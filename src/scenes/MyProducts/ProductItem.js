import React from 'react'

import './MyProducts.scss'
import more from '../../vectors/more-vertical.svg'

const ProductItem = ({ group }) => {
  const product = group.product
  const expireDate = new Date(group.expiresAt).toLocaleString('es-AR')

  return (
    <div className='MyProducts__List__item'>
      <div className='MyProducts__List__item--description'>
        <div className='MyProducts__List__item--image'>
          <img src={product.photoUrl} />
        </div>
        <div className='MyProducts__List__item--info'>
          <span>#{product.id.slice(0, 8)}</span>
          <p>{product.name}</p>
          <span>45 visitas | 2 ventas</span>
        </div>
      </div>
      <div className='MyProducts__List__item--price'>
        <span>${product.marketPrice}</span>
        <p>${product.price}</p>
      </div>
      <div className='MyProducts__List__item--discount'>
        <p>{group.discount}%</p>
      </div>
      <div className='MyProducts__List__item--participants'>
        <p>{group.minParticipants} - {group.maxParticipants}</p>
      </div>
      <div className='MyProducts__List__item--expireDate'>
        <p>{expireDate.slice(0, -3)} hs</p>
      </div>
      <div className='MyProducts__List__item--more'>
        <button><img src={more} alt=':' /></button>
      </div>
    </div>
  )
}

export default ProductItem
