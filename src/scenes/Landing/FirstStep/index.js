import React from 'react'
import classes from './styles.module.scss'

const FirstStep = (props) => {
  return (
    <div {...props}>
      <div className={classes.container}>
        <span className={classes.you}>VOS</span>
        <span className={classes.loadProducts}>Cargá tus productos</span>
        <span className={classes.register}>
          <a id='seller_landing_a_cta_top' href='/auth/signup' className={classes.registerRed}>
            Registrate
          </a> con tu email y comenzá a cargar tus productos en nuestra plataforma
        </span>
      </div>
    </div>
  )
}

export default FirstStep
