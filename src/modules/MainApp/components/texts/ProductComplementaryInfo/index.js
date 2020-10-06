import React, { useMemo } from 'react'
import classnames from 'classnames'

import Text from '../Text'

import classes from './styles.module.scss'

const ProductComplementaryInfo = ({ className, children, ...restProps }) => {
  const productInfoClassnames = useMemo(() => classnames(classes.productComplementaryInfo, className), [className])

  return (
    <Text className={productInfoClassnames} {...restProps}>{children}</Text>
  )
}

ProductComplementaryInfo.propTypes = {
  ...Text.propTypes
}

export default ProductComplementaryInfo
