import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'
import Select from 'react-select'
import classnames from 'classnames'

import classes from './styles.module.scss'

const AppSelect = ({ name, placeholder, options, className, ...props }) => {
  const [field, meta, helper] = useField(name)

  return (
    <div className={classnames(classes.selectContainer, className)}>
      <Select
        {...field}
        {...props}
        name={name}
        placeholder={placeholder}
        options={options}
        className={classnames({ [classes.error]: meta.error })}
        classNamePrefix='react-select'
        label={field.value && field.value.label}
        value={field.value && field.value.value}
        onChange={(option) => helper.setValue(option.value)}
      />
      {meta.error && meta.touched && <div className={classes.errorText}>{meta.error}</div>}
    </div>
  )
}

AppSelect.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.any,
    label: PropTypes.string
  })).isRequired
}

export default AppSelect
