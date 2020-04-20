import React, { useState } from 'react'
import { useField } from 'formik'
import EyeOpen from '../../../vectors/eye.svg'
import EyeOff from '../../../vectors/eye-off.svg'

import classNames from 'classnames'

import './styles.scss'

const InputNormal = ({ type = 'text', ...props }) => {
  const [field, meta] = useField(props)
  const [isHidePassword, setIsHidePassword] = useState(true)

  const isShowPassword = () => {
    if (isHidePassword) return 'password'

    return 'text'
  }

  const isPassword = type === 'password'

  const inputClass = classNames({
    'input__normal--error': meta.error,
    'input__normal--focused': !meta.error && meta.touched,
    input__normal: !meta.error
  })

  return (
    <div className='input__normal--container'>
      <input
        className={inputClass}
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
