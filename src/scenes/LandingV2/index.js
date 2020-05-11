import React from 'react'
import Banner from './Banner'
import Carousel from '../Landing/Mobile/Carousel'
import Header from '../Landing/Mobile/Header'
import Steps from './Steps'
import MobileSteps from './Steps/MobileSteps'
import Register from '../Landing/RegisterCard'
import useMediaQuery from '../../hooks/useMediaQuery'
import { useFireAnalyticsABPageExperimentEvent } from '../../utils/abTesting'

import classes from './styles.module.scss'
const BREAK_POINT = '(max-device-width: 576px)'

const LandingV2 = () => {
  const isMobile = useMediaQuery(BREAK_POINT)
  useFireAnalyticsABPageExperimentEvent('SELLER_LANDING_B')

  if (isMobile) {
    return (
      <div className={classes.mobileContainer}>
        <Header />
        <Carousel />
        <MobileSteps />
        <Register />
      </div>
    )
  }

  return (
    <div className={classes.container}>
      <Banner />
      <Steps />
      <Register />
    </div>
  )
}

export default LandingV2
