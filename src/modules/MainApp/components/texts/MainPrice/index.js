import React, { useMemo } from 'react'
import classnames from 'classnames'

import Text from '../Text'

import classes from './styles.module.scss'

const MainPrice = ({ className, children, ...restProps }) => {
  const mainPriceClassnames = useMemo(() => classnames(classes.mainPrice, className), [className])

  return (
    <Text className={mainPriceClassnames} {...restProps}>{children}</Text>
  )
}

MainPrice.propTypes = {
  ...Text.propTypes
}

export default MainPrice
