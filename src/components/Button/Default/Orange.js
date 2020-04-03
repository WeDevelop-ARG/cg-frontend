import React from 'react'

import './styles.scss'

const ButtonDefaultOrange = ({ children, ...props }) => {
  return (
    <button type='button' {...props} className='button-default__orange'>{children}</button>
  )
}

export default ButtonDefaultOrange
