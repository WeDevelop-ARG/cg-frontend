import React from 'react'
import PropTypes from 'prop-types'

const Text = ({ className, children, ...restProps }) => {
  return (
    <span className={className} {...restProps}>{children}</span>
  )
}

Text.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  children: PropTypes.node
}

export default Text
