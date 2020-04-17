import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../../components/Button/Default/Orange'

import './MyProducts.scss'

const ProductItem = ({ group }) => {
  const product = group.product
  const expireDate = new Date(group.expiresAt).toLocaleString("es-AR")

  return (
    <div className='MyProducts__List--item'>
      <div className='MyProducts__List--item--description'>
        <div className='MyProducts__List--item--image'>
          <img src={product.photoUrl} />
        </div>
        <div className='MyProducts__List--item--info'>
          <span>#{product.id.slice(0, 8)}</span>
          <p>{product.name}</p>
          <span>45 visitas | 2 ventas</span>
        </div>
      </div>
      <div className='MyProducts__List--item--price'>
        <span>${product.marketPrice}</span>
        <p>${product.price}</p>
      </div>
      <div className='MyProducts__List--item--discount'>
        <p>{group.discount}%</p>
      </div>
      <div className='MyProducts__List--item--participants'>
        <p>{group.minParticipants} - {group.maxParticipants}</p>
      </div>
      <div className='MyProducts__List--item--expireDate'>
        <p>{expireDate.slice(0, -3)} hs</p>
      </div>
      <div className='MyProducts__List--item--more'>
        <button>:</button>
      </div>
    </div>
  )
}

export default ProductItem
