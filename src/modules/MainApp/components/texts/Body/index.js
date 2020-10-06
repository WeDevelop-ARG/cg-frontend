import React, { useMemo } from 'react'
import classnames from 'classnames'

import Text from '../Text'

import classes from './styles.module.scss'

const Body = ({ className, children, ...restProps }) => {
  const bodyClassnames = useMemo(() => classnames(classes.body, className), [className])

  return (
    <Text className={bodyClassnames} {...restProps}>{children}</Text>
  )
}

Body.propTypes = {
  ...Text.propTypes
}

export default Body
