import React from 'react'
import { Link } from 'react-router-dom'
import classes from './styles.module.scss'
import StepInfo from '../../StepInfo'

const FirstPart = () => {
  return (
    <div className={classes.firstFourthSteps}>
      <h2 className={classes.howItWorks}>¿Cómo funciona?</h2>
      <StepInfo header='VOS' title='Cargá tus productos' className={classes.firstStep}>
        <Link id='seller_landing_a_cta_top' to='/auth/registro-vendedor'>
          Registrate
        </Link> con tu email y comenzá a cargar tus productos en nuestra plataforma
      </StepInfo>
      <StepInfo header='VOS' title='Creá grupos de venta' className={classes.secondStep}>
        Definí tus grupos de venta y la cantidad de personas a las que querés llegar
      </StepInfo>
      <StepInfo header='LOS COMPRADORES' title='Eligen el producto' className={classes.thirdStep}>
        Ingresan a nuestra plataforma y eligen entre las distintas promociones y productos
      </StepInfo>
      <StepInfo header='LOS COMPRADORES' title='Se agrupan y comparten' className={classes.fourthStep}>
        Se suman al grupo junto con otras personas que quieran lo mismo y lo comparten en sus redes sociales
      </StepInfo>
    </div>
  )
}

export default FirstPart
