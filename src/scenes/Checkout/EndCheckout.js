import React from 'react'
import { useHistory } from 'react-router-dom'

import './EndCheckout.scss'
import PriceTag from '../../vectors/price-tag.svg'
import CopyLink from '../../vectors/copy-link.svg'

import GroupProgress from '../../components/GroupProgress'
import getDiscount from '../../components/DiscountBadget/getPercent'

const EndCheckout = ({ group: { product, ...group } } = {}) => {
  const history = useHistory()

  const goToHome = () => {
    history.push('/')
  }

  const leftParticipants = group.minParticipants - group.participantsCount
  const discount = getDiscount(product.marketPrice, product.price)

  return (
    <>
      <div className='EndCheckout__redirect'>
        <button type='button' name='asd' onClick={() => goToHome()}>
          &#60;  Volver a la pagina principal
        </button>
      </div>
      <div className='EndCheckout'>
        <div className='EndCheckout__thanks'>
          <h1>¡Ya sos parte del grupo de compra!</h1>
          <span>Te enviaremos un mail de confirmación cuando el grupo se haya completado y la compra se haga efectiva.</span>
        </div>
        <div className='EndCheckout__checkout-info'>
          <div className='EndCheckout__checkout-info--product'>
            <div className='EndCheckout__checkout-info--product--image'>
              <img src={product.photoUrl || product.photos[0].url} alt={product.name} />
            </div>
            <div className='EndCheckout__checkout-info--product--description'>
              <h4>Descripción</h4>
              <h2>{product.description}</h2>
              <span>
                <img src={PriceTag} alt='' /> {discount}% ahorro
              </span>
            </div>
          </div>
          <div>
            <h4>Total:</h4>
            <div className='EndCheckout__checkout-info--total'>
              <span className='EndCheckout__checkout-info--total--market'>${product.marketPrice}</span>
              <span className='EndCheckout__checkout-info--total--price'>${product.price}</span>
            </div>
          </div>
        </div>
        <div className='EndCheckout__progress-info'>
          <GroupProgress
            currentParticipants={group.participantsCount}
            minParticipants={group.minParticipants}
            type={group.type}
          />
          <p>
            <b>Faltan {leftParticipants} compradores para completar el grupo!</b><br />
            Compartí y suma gente para acceder más rápido a tu producto
          </p>
        </div>
        <div className='EndCheckout__share'>
          <div className='EndCheckout__share--sharebox'>
            <p>http://comprasgrupales.com/{(product.name).replace(/ /g, '-').toLowerCase()}</p>
            <img src={CopyLink} alt='' />
          </div>
          <button className='EndCheckout__share--sharebutton'>
            &#128222;
          </button>
        </div>
      </div>
    </>
  )
}

export default EndCheckout
