import React from 'react'
import classnames from 'classnames'
import classes from './styles.module.scss'

const FirstStep = ({ header, title, children, className }) => {
  return (
    <div className={classes.container}>
      <div className={classnames(classes.stepInfo, className)}>
        {header && <span className={classes.header}>{header}</span>}
        <span className={classes.title}>{title}</span>
        <span className={classes.subtitle}>
          {children}
        </span>
      </div>
    </div>
  )
}

export default FirstStep
