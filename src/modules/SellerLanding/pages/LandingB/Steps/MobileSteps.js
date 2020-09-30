import React from 'react'
import { StepOne, StepTwo, StepThree } from './StepsInfo'

import classes from './styles.module.scss'
import step1 from '~/src/assets/img/LandingV2/step1.svg'
import step2 from '~/src/assets/img/LandingV2/step2.svg'
import step3 from '~/src/assets/img/LandingV2/step3.svg'

const MobileSteps = () => {
  return (
    <div className={classes.mobileContent}>
      <h1>¿Cómo funciona?</h1>
      <div className={classes.step}>
        <img src={step1} alt='Paso 1' style={{ height: '180px', background: 'transparent' }} />
        <StepOne />
      </div>

      <div className={classes.step}>
        <img src={step2} alt='Paso 2' style={{ height: '180px', background: 'transparent' }} />
        <StepTwo />
      </div>

      <div className={classes.step}>
        <img src={step3} alt='Paso 3' style={{ height: '180px' }} />
        <StepThree />
      </div>
    </div>
  )
}

export default MobileSteps
