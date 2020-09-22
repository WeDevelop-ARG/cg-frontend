import React from 'react'

import './styles.scss'

const ButtonDefaultOrange = ({ text, ...props }) => {
  return (
    <button type='button' {...props} className='button-default__black'>{text}</button>
  )
}

export default ButtonDefaultOrange
