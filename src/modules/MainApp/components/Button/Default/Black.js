import React from 'react'
import classnames from 'classnames'

import './styles.scss'

const ButtonDefaultOrange = ({ text, className, ...props }) => {
  return (
    <button
      type='button'
      {...props}
      className={classnames('button-default__black', className)}
    >
      {text}
    </button>
  )
}

export default ButtonDefaultOrange
