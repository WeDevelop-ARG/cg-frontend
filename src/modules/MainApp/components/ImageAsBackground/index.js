import React from 'react'
import PropTypes from 'prop-types'

const ImageAsBackround = ({ imageUrl, className }) => {
  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center'
      }}
    />
  )
}

ImageAsBackround.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default ImageAsBackround
