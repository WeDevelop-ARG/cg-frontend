import React from 'react'
import classes from './styles.module.scss'

const ThirdStep = (props) => (
  <div {...props}>
    <div className={classes.thirdStep}>
      <span className={classes.buyers}>LOS COMPRADORES</span>
      <span className={classes.choice}>Eligen el producto</span>
      <span className={classes.register}>
        Ingresan a nuestra plataforma y eligen entre las distintas promociones y productos
      </span>
    </div>
  </div>
)

export default ThirdStep
