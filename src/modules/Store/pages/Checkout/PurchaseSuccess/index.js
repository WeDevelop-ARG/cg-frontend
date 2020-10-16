import React from 'react'
import { useHistory } from 'react-router-dom'
import GroupProgress from '~/src/components/GroupProgress'
import getDiscount from '~/src/components/DiscountBadget/getPercent'
import ProductInfo from './ProductInfo'
import ProductShare from './ProductShare'

import classes from './styles.module.scss'

const EndCheckout = ({ group: { product, ...group } } = {}) => {
  const history = useHistory()

  const goToHome = () => {
    history.push('/store')
  }

  const leftParticipants = group.minParticipants - (group.participantsCount + 1)
  const discount = getDiscount(product.marketPrice, product.price)

  return (
    <>
      <button className={classes.redirect} onClick={() => goToHome()}>
        &#60;  Volver a la pagina principal
      </button>
      <div className={classes.container}>
        <h1>¡Ya sos parte del grupo de compra!</h1>
        <span>Te enviaremos un mail de confirmación cuando el grupo se haya completado y la compra se haga efectiva.</span>
        <ProductInfo product={product} discount={discount} />
        <GroupProgress
          currentParticipants={group.participantsCount}
          minParticipants={group.minParticipants}
          type={group.type}
        />
        <div className={classes.leftParticipants}>
          <p><b>Faltan {leftParticipants} compradores para completar el grupo!</b></p>
          <p>Compartí y suma gente para acceder más rápido a tu producto</p>
        </div>
        <ProductShare groupId={group.id} />
      </div>
    </>
  )
}

export default EndCheckout
