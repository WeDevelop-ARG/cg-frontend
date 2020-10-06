import React, { useMemo } from 'react'
import classnames from 'classnames'

import Text from '../Text'

import classes from './styles.module.scss'

const Discount = ({ className, children, ...restProps }) => {
  const discountClassnames = useMemo(() => classnames(classes.discount, className), [className])

  return (
    <Text className={discountClassnames} {...restProps}>{children}</Text>
  )
}

Discount.propTypes = {
  ...Text.propTypes
}

export default Discount
