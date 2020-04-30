import React from 'react'
import Banner from './Banner'
import Carousel from '../Landing/Mobile/Carousel'
import Header from '../Landing/Mobile/Header'
import Steps from './Steps'
import MobileSteps from './Steps/MobileSteps'
import EmailForm from './EmailForm'
import useMediaQuery from '../../hooks/useMediaQuery'

import classes from './styles.module.scss'
const BREAK_POINT = '(max-device-width: 576px)'

const LandingV2 = () => {
  const isMobile = useMediaQuery(BREAK_POINT)

  if (isMobile) {
    return (
      <div className={classes.mobileContainer}>
        <Header />
        <Carousel />
        <MobileSteps />
        <EmailForm />
      </div>
    )
  }

  return (
    <div className={classes.container}>
      <Banner />
      <Steps />
      <EmailForm />
    </div>
  )
}

export default LandingV2
