import React, { useMemo } from 'react'
import classnames from 'classnames'

import Text from '../Text'

import classes from './styles.module.scss'

const Info = ({ className, children, ...restProps }) => {
  const infoClassnames = useMemo(() => classnames(classes.info, className), [className])

  return (
    <Text className={infoClassnames} {...restProps}>{children}</Text>
  )
}

Info.propTypes = {
  ...Text.propTypes
}

export default Info
