import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import classes from './styles.module.scss'

const Title = ({ className, children, ...restProps }) => {
  const titleClassnames = useMemo(() => classnames(classes.title, className), [className])

  return (
    <div className={titleClassnames} {...restProps}>{children}</div>
  )
}

Title.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  children: PropTypes.node
}

export default Title
