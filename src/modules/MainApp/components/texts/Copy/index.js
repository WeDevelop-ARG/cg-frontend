import React, { useMemo } from 'react'
import classnames from 'classnames'

import Text from '../Text'

import classes from './styles.module.scss'

const Copy = ({ className, children, ...restProps }) => {
  const copyClassnames = useMemo(() => classnames(classes.copy, className), [className])

  return (
    <Text className={copyClassnames} {...restProps}>{children}</Text>
  )
}

Copy.propTypes = {
  ...Text.propTypes
}

export default Copy
