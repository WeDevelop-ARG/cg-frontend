import React from 'react'
import PropTypes from 'prop-types'
import { Field, useField } from 'formik'
import classnames from 'classnames'
import AngleDown from '~/src/vectors/angle-down.svg'

import Option from '../Option'

import classes from './styles.module.scss'

const Select = ({ className, children, ...props }) => {
  const [field, meta] = useField(props)

  const selectClass = classnames({
    [classes.selectError]: meta.error,
    [classes.selectFocus]: !meta.error && meta.touched,
    [classes.select]: !meta.error
  })

  return (
    <div className={classes.selectContainer}>
      <img
        className={classes.arrow}
        src={AngleDown}
        alt='select'
      />
      <Field
        component='select'
        className={classnames(selectClass, className)}
        {...field}
        {...props}
      >
        <Option disabled hidden value=''>Seleccioná una</Option>
        {children}
      </Field>
      {meta.error && meta.touched && <div className={classes.errorText}>{meta.error}</div>}
    </div>
  )
}

Select.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export {
  Select as default,
  Option
}
