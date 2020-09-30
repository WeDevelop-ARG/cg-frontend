import React from 'react'
import classes from './styles.module.scss'
import LandingShapes from '~/src/vectors/landingv1-shapes.svg'
import Banner from '../../components/BannerA'
import Icon from '~/src/modules/MainApp/components/Icon'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'
import FourthStep from './FourthStep'
import GroupComplete from './GroupComplete'
import FifthStep from './FifthStep'
import SixthStep from './SixthStep'
import SeventhStep from './SeventhStep'
import RegisterCard from './RegisterCard'
import { useFireAnalyticsABPageExperimentEvent } from '~/src/utils/abTesting'

const Landing = () => {
  useFireAnalyticsABPageExperimentEvent('SELLER_LANDING_A')

  return (
    <div className={classes.landingContainer}>
      <Banner />
      <div className={classes.steps}>
        <div className={classes.firstFourthSteps}>
          <Icon className={classes.shapes} icon={LandingShapes} />
          <h2 className={classes.howItWorks}>¿Cómo funciona?</h2>
          <FirstStep className={classes.firstStep} />
          <SecondStep className={classes.secondStep} />
          <ThirdStep className={classes.thirdStep} />
          <FourthStep className={classes.fourthStep} />
        </div>
        <GroupComplete />
        <div className={classes.lastSteps}>
          <FifthStep className={classes.fifthStep} />
          <SixthStep className={classes.sixthStep} />
          <SeventhStep className={classes.seventhStep} />
        </div>
        <RegisterCard registerLinkId='seller_landing_a_cta_bottom' />
      </div>
    </div>
  )
}

export default Landing
