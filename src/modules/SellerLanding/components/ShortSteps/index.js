import React from 'react'
import classes from './styles.module.scss'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'

const ShortSteps = () => {
  return (
    <div className={classes.shortSteps}>
      <h2 className={classes.howItWorks}>¿Cómo funciona?</h2>
      <FirstStep className={classes.firstStep} />
      <SecondStep className={classes.secondStep} />
      <ThirdStep className={classes.thirdStep} />
    </div>
  )
}

export default ShortSteps
