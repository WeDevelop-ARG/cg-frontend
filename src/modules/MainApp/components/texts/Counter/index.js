import React, { useMemo } from 'react'
import classnames from 'classnames'

import Text from '../Text'

import classes from './styles.module.scss'

const Counter = ({ className, children, ...restProps }) => {
  const counterClassnames = useMemo(() => classnames(classes.counter, className), [className])

  return (
    <Text className={counterClassnames} {...restProps}>{children}</Text>
  )
}

Counter.propTypes = {
  ...Text.propTypes
}

export default Counter
