import React, { useState } from 'react'
import { useField } from 'formik'
import EyeOpen from '../../../vectors/eye.svg'
import EyeOff from '../../../vectors/eye-off.svg'

import classNames from 'classnames'

import classes from './styles.module.scss'

const InputNormal = ({ type = 'text', ...props }) => {
  const [field, meta] = useField(props)
  const [isHidePassword, setIsHidePassword] = useState(true)

  const isShowPassword = () => {
    if (isHidePassword) return 'password'

    return 'text'
  }

  const isPassword = type === 'password'

  const inputClass = classNames({
    [classes.inputError]: meta.error,
    [classes.inputFocused]: !meta.error && meta.touched,
    [classes.input]: !meta.error
  })

  const containerClass = classNames({
    [classes.container]: !meta.error,
    [classes.containerError]: meta.error
  })

  return (
    <div className={containerClass}>
      <input
        className={inputClass}
        type={isPassword ? isShowPassword() : 'text'}
        {...field}
        {...props}
      />
      {isPassword && <img onClick={() => setIsHidePassword(!isHidePassword)} className={classes.eye} src={isHidePassword ? EyeOff : EyeOpen} alt='' />}
      {meta.error && meta.touched && <div className={classes.errorText}>{meta.error}</div>}
    </div>
  )
}

export default InputNormal
