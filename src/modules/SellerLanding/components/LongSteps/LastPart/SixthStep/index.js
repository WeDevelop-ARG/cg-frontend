import React from 'react'

import classes from './styles.module.scss'

const SixthStep = ({ className }) => (
  <div className={className}>
    <div className={classes.sixthStepContainer}>
      <div className={classes.sixthStep}>
        <span className={classes.you}>VOS</span>
        <span className={classes.send}>Enviá tus productos</span>
        <span className={classes.delivery}>
          Realizá el envío de tus productos a los compradores
        </span>
      </div>
    </div>
  </div>
)

export default SixthStep
