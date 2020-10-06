import React, { useMemo } from 'react'
import classnames from 'classnames'

import Text from '../Text'

import classes from './styles.module.scss'

const Title = ({ className, children, ...restProps }) => {
  const titleClassnames = useMemo(() => classnames(classes.title, className), [className])

  return (
    <Text className={titleClassnames} {...restProps}>{children}</Text>
  )
}

Title.propTypes = {
  ...Text.propTypes
}

export default Title
