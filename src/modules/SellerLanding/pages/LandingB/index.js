import React from 'react'
import Icon from '~/src/modules/MainApp/components/Icon'
import Banner from '../../components/BannerB'
import Steps from '../../components/ShortSteps'
import Register from '../../components/RegisterCard'
import { useFireAnalyticsABPageExperimentEvent } from '~/src/utils/abTesting'

import LandingShapes from '~/src/vectors/landingB-desktop.svg'
import LandingShapesMobile from '~/src/vectors/landingB-mobile.svg'
import classnames from 'classnames'
import classes from './styles.module.scss'

const LandingB = () => {
  useFireAnalyticsABPageExperimentEvent('SELLER_LANDING_B')

  return (
    <div className={classes.container}>
      <Banner />
      <div className={classes.steps}>
        <Icon className={classnames(classes.shapes, classes.onlyDesktop)} icon={LandingShapes} />
        <Icon className={classnames(classes.shapes, classes.onlyMobile)} icon={LandingShapesMobile} />
        <Steps />
        <Register registerLinkId='seller_landing_b_cta_bottom' />
      </div>
    </div>
  )
}

export default LandingB
