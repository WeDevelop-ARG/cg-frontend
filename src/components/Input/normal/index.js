import React, { useState } from 'react'
import { useField } from 'formik'
import EyeOpen from '../../../vectors/eye.svg'
import EyeOff from '../../../vectors/eye-off.svg'

import './styles.scss'

const InputNormal = ({ type = 'text', ...props }) => {
  const [field, meta] = useField(props)
  const [isHidePassword, setIsHidePassword] = useState(true)

  const isTouched = () => {
    if (meta.touched) return 'input__normal--focused'

    return 'input__normal'
  }

  const isShowPassword = () => {
    if (isHidePassword) return 'password'

    return 'text'
  }

  const isPassword = type === 'password'

  return (
    <div className='input__normal--container'>
      <input
        className={
          meta.error ? 'input__normal--error' : isTouched()
        }
        type={isPassword ? isShowPassword() : 'text'}
        {...field}
        {...props}
      />
      {isPassword && <img onClick={() => setIsHidePassword(!isHidePassword)} className='input__normal__eye' src={isHidePassword ? EyeOff : EyeOpen} alt='' />}
      {meta.error && meta.touched && <div className='input__normal__error-text'>{meta.error}</div>}
    </div>
  )
}

export default InputNormal
