import React, { useState } from 'react'
import EyeOpen from '../../../vectors/eye.svg'
import EyeOff from '../../../vectors/eye-off.svg'

import './styles.scss'

const InputNormal = ({
  name,
  value = '',
  touched = {},
  errors = {},
  isSubmitting = false,
  isPassword = false,
  ...props
}) => {
  const [isHidePassword, setIsHidePassword] = useState(true)

  const isTouched = () => {
    if (touched[name]) return 'input__normal--focused'

    return 'input__normal'
  }

  const isShowPassword = () => {
    if (isHidePassword) return 'password'

    return 'text'
  }

  return (
    <div className='input__normal--container'>
      <input
        className={
          errors[name] ? 'input__normal--error' : isTouched()
        }
        name={name}
        type={isPassword ? isShowPassword() : 'text'}
        value={value}
        disabled={isSubmitting}
        {...props}
      />
      {isPassword && <img onClick={() => setIsHidePassword(!isHidePassword)} className='input__normal__eye' src={isHidePassword ? EyeOff : EyeOpen} alt='' />}
      {errors[name] && touched[name] && <div className='input__normal__error-text'>{errors[name]}</div>}
    </div>
  )
}

export default InputNormal
