import React from 'react'
import ImageAsBackround from '~/src/modules/MainApp/components/ImageAsBackground'

import PriceTag from '~/src/vectors/price-tag.svg'
import classes from './styles.module.scss'

const EndCheckout = ({ product, discount }) => {
  return (
    <div className={classes.product}>
      <div className={classes.productData}>
        <ImageAsBackround imageUrl={product.photos[0].url} className={classes.image} />
        <div className={classes.info}>
          <h4 className={classes.title}>Descripción</h4>
          <h2 className={classes.productName}>{product.description}</h2>
          <span className={classes.discountTag}>
            <img src={PriceTag} alt='' /> {discount}% ahorro
          </span>
        </div>
      </div>
      <div className={classes.prices}>
        <h4 className={classes.title}>Total:</h4>
        <div className={classes.total}>
          <span className={classes.marketPrice}>${product.marketPrice}</span>
          <span className={classes.price}>${product.price}</span>
        </div>
      </div>
    </div>
  )
}

export default EndCheckout
