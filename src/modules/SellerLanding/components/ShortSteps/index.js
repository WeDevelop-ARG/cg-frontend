import React from 'react'
import { Link } from 'react-router-dom'
import classes from './styles.module.scss'
import StepInfo from '../StepInfo'

const ShortSteps = () => {
  return (
    <div className={classes.shortSteps}>
      <h2 className={classes.howItWorks}>¿Cómo funciona?</h2>
      <StepInfo title='Cargá tus productos' className={classes.firstStep}>
        <Link id='seller_landing_a_cta_top' to='/auth/signup'>
          Registrate
        </Link> con tu email y comenzá a cargar tus productos en nuestra plataforma
      </StepInfo>
      <StepInfo title='Creá grupos de venta' className={classes.secondStep}>
        Definí tus grupos de venta y la cantidad de personas a las que querés llegar
      </StepInfo>
      <StepInfo title='Eligen el producto' className={classes.thirdStep}>
        Ingresan a nuestra plataforma y eligen entre las distintas promociones y productos
      </StepInfo>
    </div>
  )
}

export default ShortSteps
