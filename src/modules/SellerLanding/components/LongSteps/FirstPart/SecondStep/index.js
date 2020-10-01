import React from 'react'
import classes from './styles.module.scss'

const SecondStep = ({ className }) => (
  <div className={className}>
    <div className={classes.secondStepContainer}>
      <div className={classes.secondStep}>
        <span className={classes.you}>VOS</span>
        <span className={classes.createGroup}>Creá grupos de venta</span>
        <span className={classes.define}>
          Definí tus grupos de venta y la cantidad de personas a las que querés llegar
        </span>
      </div>
    </div>
  </div>
)

export default SecondStep
