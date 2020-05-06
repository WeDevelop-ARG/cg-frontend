import React from 'react'
import { useField } from 'formik'

import classNames from 'classnames'

import classes from './styles.module.scss'

const InputMultiLine = ({ ...props }) => {
  const [field, meta] = useField(props)

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
      <textarea
        className={inputClass}
        type='text'
        {...field}
        {...props}
      />
      {meta.error && meta.touched && <div className={classes.errorText}>{meta.error}</div>}
    </div>
  )
}

export default InputMultiLine
