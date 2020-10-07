import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.scss'

const Prices = ({ oldPrice, newPrice }) => (
  <div className={classes.prices}>
    <div className={classes.oldPrice}>${oldPrice}</div>
    <div className={classes.newPrice}>${newPrice}</div>
  </div>
)

Prices.propTypes = {
  oldPrice: PropTypes.number,
  newPrice: PropTypes.number
}

export default Prices
