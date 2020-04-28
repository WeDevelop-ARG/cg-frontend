import React from 'react'

import classes from './styles.module.scss'

const Toast = ({ children, onDismiss, transitionState }) => (
  <div className={classes.toast}>
    {children}
    <button onClick={onDismiss}>&times;</button>
  </div>
)

export default Toast
