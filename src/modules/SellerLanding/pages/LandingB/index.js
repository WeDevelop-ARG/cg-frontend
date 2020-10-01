import React from 'react'
import Banner from './Banner'
import Carousel from '../../components/Carousel'
import Header from '../LandingA/Mobile/Header'
import Steps from './Steps'
import MobileSteps from './Steps/MobileSteps'
import Register from '../../components/RegisterCard'
import useMediaQuery from '~/src/hooks/useMediaQuery'
import { useFireAnalyticsABPageExperimentEvent } from '~/src/utils/abTesting'

import classes from './styles.module.scss'
const BREAK_POINT = '(max-device-width: 576px)'

const LandingV2 = () => {
  const isMobile = useMediaQuery(BREAK_POINT)
  useFireAnalyticsABPageExperimentEvent('SELLER_LANDING_B')

  if (isMobile) {
    return (
      <div className={classes.mobileContainer}>
        <Header schemeColor='blue' />
        <Carousel />
        <MobileSteps />
        <Register
          registerLinkId='seller_landing_b_cta_bottom'
        />
      </div>
    )
  }

  return (
    <div className={classes.container}>
      <Banner />
      <Steps />
      <Register
        registerLinkId='seller_landing_b_cta_bottom'
      />
    </div>
  )
}

export default LandingV2
