import React from 'react'

import classes from './styles.module.scss'
import step1 from '../../../assets/img/LandingV2/step1.svg'
import step2 from '../../../assets/img/LandingV2/step2.svg'
import step3 from '../../../assets/img/LandingV2/step3.svg'

const MobileSteps = () => {
  return (
    <div className={classes.mobileContent}>
      <h1>¿Cómo funciona?</h1>
      <div className={classes.step}>
        <img src={step1} alt='Paso 1' style={{ height: '180px', background: 'transparent' }} />
        <div className={classes.stepInfo}>
          <h2>Registrate</h2>
          <p>Ingresá todos tus datos en el sistema y seguí paso a paso las indicaciones para comenzar </p>
        </div>
      </div>

      <div className={classes.step}>
        <img src={step2} alt='Paso 2' style={{ height: '180px' }} />
        <div className={classes.stepInfo}>
          <h2>Cargá tus productos</h2>
          <p>Subí varias imágenes y añadí la descripción para los productos que querés vender</p>
        </div>
      </div>

      <div className={classes.step}>
        <img src={step3} alt='Paso 3' style={{ height: '180px' }} />
        <div className={classes.stepInfo}>
          <h2>Definí el stock y el tiempo</h2>
          <p>Determiná la cantidad de unidades a vender de cada producto, así como el tiempo que dura la publicación.</p>
        </div>
      </div>
    </div>
  )
}

export default MobileSteps
