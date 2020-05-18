import React from 'react'
import { StepOne, StepTwo, StepThree } from './StepsInfo'

import classes from './styles.module.scss'
import step1 from '../../../assets/img/LandingV2/step1.svg'
import step2 from '../../../assets/img/LandingV2/step2.svg'
import step3 from '../../../assets/img/LandingV2/step3.svg'

const Steps = () => {
  return (
    <div className={classes.content}>
      <h1>¿Cómo funciona?</h1>
      <div className={classes.howTo}>
        <div className={classes.step}>
          <StepOne />
          <img src={step1} alt='Paso 1' style={{ height: '308px' }} />
        </div>

        <svg viewBox='-150 0 1200 180' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path opacity='0.3' d='M850 1.5C589.5 256 -34 1.5 3.5 201.5' stroke='#A0ACAF' strokeWidth='3' strokeDasharray='12 12' />
        </svg>

        <div className={classes.step}>
          <img src={step2} alt='Paso 2' style={{ height: '256px' }} />
          <StepTwo />
        </div>

        <svg viewBox='-100 0 1000 168' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path opacity='0.3' d='M2 0C2 224.959 480 -33.5 714 166' stroke='#A0ACAF' strokeWidth='3' strokeDasharray='12 12' />
        </svg>

        <div className={classes.step}>
          <StepThree />
          <img src={step3} alt='Paso 3' style={{ height: '265px' }} />
        </div>

        <svg viewBox='-50 0 1000 180' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path opacity='0.3' d='M758 1C764.5 40.8333 733.361 153.159 624.561 133.959C488.561 109.959 245.561 15.9594 145.561 84.9594C65.5608 140.159 14.5 224.167 1 224' stroke='#A0ACAF' strokeWidth='3' strokeDasharray='12 12' />
        </svg>
      </div>
    </div>
  )
}

export default Steps
