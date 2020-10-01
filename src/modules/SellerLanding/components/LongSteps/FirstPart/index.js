import React from 'react'
import classes from './styles.module.scss'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'
import FourthStep from './FourthStep'

const Landing = () => {
  return (
    <div className={classes.firstFourthSteps}>
      <h2 className={classes.howItWorks}>¿Cómo funciona?</h2>
      <FirstStep className={classes.firstStep} />
      <SecondStep className={classes.secondStep} />
      <ThirdStep className={classes.thirdStep} />
      <FourthStep className={classes.fourthStep} />
    </div>
  )
}

export default Landing
