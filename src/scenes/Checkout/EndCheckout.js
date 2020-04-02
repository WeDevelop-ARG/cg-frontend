import React from 'react'
import { Link } from 'react-router-dom'

import './EndCheckout.scss'

const EndCheckout = ({ product }) => {
  return (
    <div className='EndCheckout'>
      <div className='EndCheckout__thanks'>
        <h1>Ya sos parte del grupo de compra!</h1>
        <span>Te enviaremos un mail de confirmación cuando el grupo se haya completado y la compra se haga efectiva.</span>
      </div>
      <div className='EndCheckout__checkout-info'>
        <div className='EndCheckout__checkout-info__image'>
          <img src={product.photoUrl} alt={product.name} />
        </div>
        <div className='EndCheckout__checkout-info__description'>
          <h4>Descripción</h4>
          <h2>{product.description}</h2>
          <badge></badge>
        </div>
        <div>
          <h4>Total:</h4>
          <div className='EndCheckout__checkout-info__price'>
            <span className='market'>${product.marketPrice}</span>
            <span className='price'>${product.price}</span>
          </div>
        </div>
      </div>
      <div className='EndCheckout__progress-info'>
        <p>
          <b>Faltan 2 compradores para completar el grupo!</b><br/>
          Compartí y suma gente para acceder más rápido a tu producto
        </p>
      </div>
      <div className='EndCheckout__share'>
        <div className='sharebox'>
          <p>link</p>
        </div>
        <button className='sharebutton'>
          wsp
        </button>
        
      </div>
    </div>
  )
}


export default EndCheckout
