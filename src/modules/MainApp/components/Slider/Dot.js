import React from 'react'
import PropTypes from 'prop-types'

const Dot = ({ className, ...props }) => {
  return (
    <div type='button' className={className} {...props} />
  )
}

Dot.propTypes = {
  className: PropTypes.string
}

export default Dot
