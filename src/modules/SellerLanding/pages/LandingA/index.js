import React from 'react'
import { useHistory } from 'react-router-dom'
import classes from './styles.module.scss'
import LandingShapes from '~/src/vectors/landingv1-shapes.svg'
import Button from '~/src/modules/MainApp/components/Button/Default/Orange'
import Icon from '~/src/modules/MainApp/components/Icon'
import CardsGroup from '../../components/CardsGroup'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'
import FourthStep from './FourthStep'
import GroupComplete from './GroupComplete'
import FifthStep from './FifthStep'
import SixthStep from './SixthStep'
import SeventhStep from './SeventhStep'
import RegisterCard from './RegisterCard'
import useMediaQuery from '~/src/hooks/useMediaQuery'
import Mobile from './Mobile'
import { useFireAnalyticsABPageExperimentEvent } from '~/src/utils/abTesting'

const BREAK_POINT = '(max-device-width: 576px)'

const Landing = () => {
  const history = useHistory()
  const isMobile = useMediaQuery(BREAK_POINT)
  useFireAnalyticsABPageExperimentEvent('SELLER_LANDING_A')
  const goToSignUp = () => history.push('/auth/signup')

  if (isMobile) return <Mobile />

  return (
    <div className={classes.landingContainer}>
      <div className={classes.header}>
        <h1 className={classes.title}>Vendé en grande</h1>
        <h3 className={classes.subtitle}>Promocioná tus productos y llegá a más gente sin tener que invertir tiempo ni pagar comisiones.</h3>
        <Button id='seller_landing_a_header_cta' onClick={goToSignUp}>Quiero vender más</Button>
        <CardsGroup />
      </div>
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
