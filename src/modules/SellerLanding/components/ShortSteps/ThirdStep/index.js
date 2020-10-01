import React from 'react'
import classes from './styles.module.scss'

const ThirdStep = ({ className }) => (
  <div className={className}>
    <div className={classes.thirdStep}>
      <span className={classes.title}>Eligen el producto</span>
      <span className={classes.subtitle}>
        Ingresan a nuestra plataforma y eligen entre las distintas promociones y productos
      </span>
    </div>
  </div>
)

export default ThirdStep
