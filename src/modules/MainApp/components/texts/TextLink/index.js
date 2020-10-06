import React, { useMemo } from 'react'
import classnames from 'classnames'

import Text from '../Text'

import classes from './styles.module.scss'

const TextLink = ({ className, children, ...restProps }) => {
  const textLinkClassnames = useMemo(() => classnames(classes.textLink, className), [className])

  return (
    <Text className={textLinkClassnames} {...restProps}>{children}</Text>
  )
}

TextLink.propTypes = {
  ...Text.propTypes
}

export default TextLink
