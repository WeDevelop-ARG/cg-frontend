import React from 'react'
import PropTypes from 'prop-types'

import priceTag from '~/src/vectors/price-tag.svg'
import classes from './styles.module.scss'

const ProductInfo = ({ discount, name, productPhotoUrl }) => {
  return (
    <div className={classes.productData}>
      <img
        src={productPhotoUrl}
        className={classes.image}
      />
      <div className={classes.info}>
        <div className={classes.discount}>
          <PriceTag />
          {discount}% AHORRO
        </div>
        <div className={classes.productName}>{name}</div>
      </div>
    </div>
  )
}

ProductInfo.propTypes = {
  discount: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  productPhotoUrl: PropTypes.string
}

const PriceTag = () => (
  <img
    className={classes.priceTagIcon}
    src={priceTag}
    alt='priceTagIcon'
  />
)

export default ProductInfo
