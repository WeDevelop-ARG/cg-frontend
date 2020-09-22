import React from 'react'
import { useField } from 'formik'
import classNames from 'classnames'
import classes from './styles.module.scss'

const InputPrice = ({ ...props }) => {
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
    <div {...props}>
      <div className={containerClass}>
        <div className={classes.icon}>
          <span className={classes.currency}>$</span>
        </div>
        <input
          className={inputClass}
          type='number'
          {...field}
          {...props}
        />
        {meta.error && meta.touched && <div className={classes.errorText}>{meta.error}</div>}
      </div>
    </div>
  )
}

export default InputPrice
