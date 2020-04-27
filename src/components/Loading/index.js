import React from 'react'

import classes from './styles.module.scss'

const Loading = () => (
  <div className={classes.container}>
    <div className={classes.spinner}>
      <div className={classes.dot1} />
      <div className={classes.dot2} />
      <div className={classes.dot3} />
    </div>
    <span className={classes.message}>Cargando</span>
  </div>
)

export default Loading
