import React from 'react'
import PropTypes from 'prop-types'

const Dot = ({ className, ...props }) => {
  return (
    <div type='button' className={className} {...props} />
  )
}

Dot.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
}

export default Dot
