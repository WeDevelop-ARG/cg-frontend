import React from 'react'
import { Link } from 'react-router-dom'
import classes from './styles.module.scss'

const FirstStep = ({ className }) => {
  return (
    <div className={className}>
      <div className={classes.container}>
        <span className={classes.title}>Cargá tus productos</span>
        <span className={classes.subtitle}>
          <Link id='seller_landing_a_cta_top' to='/auth/signup' className={classes.subtitleRed}>
            Registrate
          </Link> con tu email y comenzá a cargar tus productos en nuestra plataforma
        </span>
      </div>
    </div>
  )
}

export default FirstStep
