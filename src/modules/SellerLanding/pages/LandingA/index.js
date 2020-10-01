import React from 'react'
import Icon from '~/src/modules/MainApp/components/Icon'
import Banner from '../../components/BannerA'
import LongStepsFirstPart from '../../components/LongSteps/FirstPart'
import LongStepsLastPart from '../../components/LongSteps/LastPart'
import GroupComplete from '../../components/GroupComplete'
import RegisterCard from '../../components/RegisterCard'
import { useFireAnalyticsABPageExperimentEvent } from '~/src/utils/abTesting'

import LandingShapes from '~/src/vectors/landingv1-shapes.svg'
import LandingShapesMobile from '~/src/vectors/landing-shape-m.svg'
import classnames from 'classnames'
import classes from './styles.module.scss'

const Landing = () => {
  useFireAnalyticsABPageExperimentEvent('SELLER_LANDING_A')

  return (
    <div className={classes.landingContainer}>
      <Banner />
      <div className={classes.steps}>
        <Icon className={classnames(classes.shapes, classes.onlyDesktop)} icon={LandingShapes} />
        <Icon className={classnames(classes.shapes, classes.onlyMobile)} icon={LandingShapesMobile} />
        <LongStepsFirstPart />
        <GroupComplete />
        <LongStepsLastPart />
        <RegisterCard registerLinkId='seller_landing_a_cta_bottom' />
      </div>
    </div>
  )
}

export default Landing
