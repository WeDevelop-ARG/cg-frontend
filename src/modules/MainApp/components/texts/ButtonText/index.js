import React, { useMemo } from 'react'
import classnames from 'classnames'

import Text from '../Text'

import classes from './styles.module.scss'

const ButtonText = ({ className, children, ...restProps }) => {
  const buttonClassnames = useMemo(() => classnames(classes.button, className), [className])

  return (
    <Text className={buttonClassnames} {...restProps}>{children}</Text>
  )
}

ButtonText.propTypes = {
  ...Text.propTypes
}

export default ButtonText
