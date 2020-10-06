import React, { useMemo } from 'react'
import classnames from 'classnames'

import Text from '../Text'

import classes from './styles.module.scss'

const ButtonLink = ({ className, children, ...restProps }) => {
  const buttonLinkClassnames = useMemo(() => classnames(classes.buttonLink, className), [className])

  return (
    <Text className={buttonLinkClassnames} {...restProps}>{children}</Text>
  )
}

ButtonLink.propTypes = {
  ...Text.propTypes
}

export default ButtonLink
