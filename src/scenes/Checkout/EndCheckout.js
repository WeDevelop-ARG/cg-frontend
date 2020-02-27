import React from 'react'
import { Link } from 'react-router-dom'

const EndCheckout = ({ product }) => {
  return (
    <div className='Checkout__EndCheckout'>
      <h1>{`Gracias por tu compra de ${product.name}`}</h1>
      <Link to='/'>
        <button type='button'>Quiero seguir comprando</button>
      </Link>
    </div>
  )
}

export default EndCheckout
