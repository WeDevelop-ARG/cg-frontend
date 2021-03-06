import React, { useState } from 'react'
import { useField } from 'formik'
import EyeOpen from '~/src/vectors/eye.svg'
import EyeOff from '~/src/vectors/eye-off.svg'

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

  const inputClass = classNames(classes.input, {
    [classes.inputError]: meta.touched && meta.error,
    [classes.inputFocused]: meta.touched && !meta.error
  })

  const containerClass = classNames({
    [classes.container]: !meta.error,
    [classes.containerError]: meta.error
  })

  return (
    <div className={containerClass}>
      <input
        className={inputClass}
        type={isPassword ? isShowPassword() : type}
        {...field}
        {...props}
      />
      {isPassword && <img onClick={() => setIsHidePassword(!isHidePassword)} className={classes.eye} src={isHidePassword ? EyeOff : EyeOpen} alt='' />}
      {meta.error && meta.touched && <div className={classes.errorText}>{meta.error}</div>}
    </div>
  )
}

export default InputNormal
