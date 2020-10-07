import React, { useMemo } from 'react'
import classnames from 'classnames'

import Text from '../Text'

import classes from './styles.module.scss'

const Subtitle = ({ className, children, ...restProps }) => {
  const subtitleClassnames = useMemo(() => classnames(classes.subtitle, className), [className])

  return (
    <Text className={subtitleClassnames} {...restProps}>{children}</Text>
  )
}

Subtitle.propTypes = {
  ...Text.propTypes
}

export default Subtitle
