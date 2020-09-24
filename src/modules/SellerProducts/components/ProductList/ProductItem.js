import React from 'react'
import currency from '~/src/utils/currency'

import classes from './styles.module.scss'
import ItemDropdown from './ItemDropdown'
import ImageAsBackround from '~/src/modules/MainApp/components/ImageAsBackground'

const ProductItem = ({ group }) => {
  const product = group.product
  const expireDate = new Date(group.expiresAt).toLocaleString('es-AR')

  return (
    <div className={classes.product}>
      <div className={classes.description}>
        <ImageAsBackround imageUrl={product.photos[0].url} className={classes.productPhoto} />
        <div className={classes.info}>
          <div>
            <span className={classes.productId}>#{product.id.slice(0, 8)}</span>
            <p>{product.name}</p>
          </div>
          <span>45 visitas | 2 ventas</span>
        </div>
      </div>

      <div className={classes.item}>
        <span className={classes.onlyMobile}>Precio</span>
        <span>{currency.ARS(product.marketPrice)}</span>
        <p>{currency.ARS(product.price)}</p>
      </div>

      <div className={classes.item}>
        <span className={classes.onlyMobile}>% Descuento</span>
        <p>{group.discount}%</p>
      </div>

      <div className={classes.item}>
        <span className={classes.onlyMobile}>Grupo</span>
        <p>{group.minParticipants} personas</p>
      </div>

      <div className={classes.item}>
        <span className={classes.onlyMobile}>Expiración</span>
        <p>{expireDate.slice(0, -3)} hs</p>
      </div>

      <ItemDropdown groupId={group.id} />
    </div>
  )
}

export default ProductItem
