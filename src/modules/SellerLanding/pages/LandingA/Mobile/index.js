import React from 'react'
import classes from './styles.module.scss'
import Header from './Header'
import landingShapes from '~/src/vectors/landing-shape-m.svg'
import Icon from '~/src/modules/MainApp/components/Icon'
import FirstStep from '../FirstStep'
import SecondStep from '../SecondStep'
import ThirdStep from '../ThirdStep'
import FourthStep from '../FourthStep'
import GroupComplete from '../GroupComplete'
import FifthStep from '../FifthStep'
import SixthStep from '../SixthStep'
import SeventhStep from '../SeventhStep'
import RegisterCard from '../RegisterCard'
import Carousel from '../../../components/Carousel'

const Mobile = () => {
  return (
    <div className={classes.landingMobile}>
      <Header />
      <Carousel />
      <div className={classes.steps}>
        <Icon className={classes.shapes} icon={landingShapes} />
        <h2 className={classes.howItWorks}>¿Cómo funciona?</h2>
        <div className={classes.firstFourSteps}>
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

export default Mobile
