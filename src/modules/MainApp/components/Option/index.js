import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import classes from './styles.module.scss'

function Option ({ value, className, ...props }) {
  return (
    <option
      value={value}
      className={classnames(classes.option, className)}
      {...props}
    />
  )
}

Option.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
}

export default Option
