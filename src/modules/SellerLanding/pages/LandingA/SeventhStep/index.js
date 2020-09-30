import React from 'react'
import classes from './styles.module.scss'

const SeventhStep = (props) => (
  <div {...props}>
    <div className={classes.seventhStep}>
      <span className={classes.you}>VOS</span>
      <span className={classes.money}>Recibí tu dinero</span>
      <span className={classes.finished}>
        Una vez concretada la transacción, el dinero se acreditará en tu cuenta
      </span>
    </div>
  </div>
)

export default SeventhStep
