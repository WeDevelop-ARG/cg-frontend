import React from 'react'
import classes from './styles.module.scss'
import LandingWaves from '../../vectors/landing-waves.svg'
import ShoppingCardIcon from '../../vectors/shopping-card.svg'
import MoneyIcon from '../../vectors/money.svg'
import GroupCardIcon from '../../vectors/group.svg'
import LandingShapes from '../../vectors/landingv1-shapes.svg'
import Icon from '../../components/Icon'
import Card from './Card'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'
import FourthStep from './FourthStep'
import GroupComplete from './GroupComplete'
import FifthStep from './FifthStep'
import SixthStep from './SixthStep'
import SeventhStep from './SeventhStep'
import RegisterCard from './RegisterCard'
import useMediaQuery from '../../hooks/useMediaQuery'
import Mobile from './Mobile'
import { useFireAnalyticsABPageExperimentEvent } from '../../utils/abTesting'

const BREAK_POINT = '(max-device-width: 576px)'

const Landing = () => {
  const isMobile = useMediaQuery(BREAK_POINT)
  useFireAnalyticsABPageExperimentEvent('SELLER_LANDING_A')

  if (isMobile) return <Mobile />

  return (
    <div className={classes.landingContainer}>
      <div className={classes.header}>
        <Icon src={LandingWaves} className={classes.headerWaves} />
        <h1 className={classes.title}>Vendé en grande</h1>
        <h3 className={classes.subtitle}>Conocé los beneficios de Compras Grupales y empezá a vender</h3>
        <div className={classes.cardsContainer}>
          <div className={classes.cards}>
            <Card
              title='Rapidez'
              icon={ShoppingCardIcon}
            >
              Vendé tu stock de productos rápidamente, sin tener que invertir tiempo en captar clientes individuales
            </Card>
            <Card
              title='Libertad de venta'
              icon={MoneyIcon}
            >
              El precio y el margen de ganancia dependen de vos, como así también las unidades a vender

            </Card>
            <Card
              title='Ganan todos'
              icon={GroupCardIcon}
            >
              A partir de la venta mayorista aumentás visibilidad, tus productos se difunden en redes sociales y llegás a más gente
            </Card>
          </div>
        </div>
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
        <RegisterCard />
      </div>
    </div>
  )
}

export default Landing
