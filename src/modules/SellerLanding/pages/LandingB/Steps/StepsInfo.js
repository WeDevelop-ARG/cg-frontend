import React from 'react'
import { Link } from 'react-router-dom'

import classes from './styles.module.scss'

export const StepOne = () => {
  return (
    <div className={classes.stepInfo}>
      <h2>Registrate</h2>
      <p>
        <Link id='seller_landing_b_cta_top' to='/auth/signup' className={classes.registerRed}>
          Ingresá
        </Link> todos tus datos en el sistema y seguí paso a paso las indicaciones para comenzar
      </p>
    </div>
  )
}

export const StepTwo = () => {
  return (
    <div className={classes.stepInfo}>
      <h2>Cargá tus productos</h2>
      <p>Subí varias imágenes y añadí la descripción para los productos que querés vender</p>
    </div>
  )
}

export const StepThree = () => {
  return (
    <div className={classes.stepInfo}>
      <h2>Definí el stock y el tiempo</h2>
      <p>Determiná la cantidad de unidades a vender de cada producto, así como el tiempo que dura la publicación.</p>
    </div>
  )
}
