import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../../components/Button/Default/Orange'

import './MyProducts.scss'
import ProductListItem from './ProductItem'

const ProductList = ({ groups }) => {
  return (
    <ul>
      <div className='MyProducts__List--headers'>
        <p>Detalles</p>
        <p>Precio</p>
        <p>% Descuento</p>
        <p>Participantes</p>
        <p>Fecha de expiración</p>
      </div>
      {groups.map(group => (
        <li key={group.id}>
          <ProductListItem group={group} />
        </li>
      ))}
    </ul>
  )
}

export default ProductList
