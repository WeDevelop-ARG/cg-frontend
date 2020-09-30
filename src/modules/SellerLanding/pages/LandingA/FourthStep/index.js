import React from 'react'

import classes from './styles.module.scss'

const FourthStep = (props) => (
  <div {...props}>
    <div className={classes.fourthStepContainer}>
      <div className={classes.fourthStep}>
        <span className={classes.buyers}>LOS COMPRADORES</span>
        <span className={classes.group}>Se agrupan y comparten</span>
        <span className={classes.add}>
          Se suman al grupo junto con otras personas que quieran lo mismo y lo comparten en sus redes sociales
        </span>
      </div>
    </div>
  </div>
)

export default FourthStep
