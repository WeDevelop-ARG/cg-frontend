import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import classes from './styles.module.scss'

const Subtitle = ({ className, children, ...restProps }) => {
  const subtitleClassnames = useMemo(() => classnames(classes.subtitle, className), [className])

  return (
    <div className={subtitleClassnames} {...restProps}>{children}</div>
  )
}

Subtitle.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  children: PropTypes.node
}

export default Subtitle
