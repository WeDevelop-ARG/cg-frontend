import React, { useMemo } from 'react'
import classnames from 'classnames'

import Text from '../Text'

import classes from './styles.module.scss'

const OldPrice = ({ className, children, ...restProps }) => {
  const oldPriceClassnames = useMemo(() => classnames(classes.oldPrice, className), [className])

  return (
    <Text className={oldPriceClassnames} {...restProps}>{children}</Text>
  )
}

OldPrice.propTypes = {
  ...Text.propTypes
}

export default OldPrice
