import React from 'react'
import classnames from 'classnames'
import Icon from '~/src/modules/MainApp/components/Icon'
import cards from './cards'
import Carousel from '../Carousel'

import LandingWaves from '~/src/assets/img/LandingV2/background.svg'
import LandingWavesMobile from '~/src/vectors/landing-waves-m.svg'
import classes from './styles.module.scss'

const CardsGroup = () => {
  return (
    <>
      <div className={classnames(classes.cardsContainer, classes.onlyDesktop)}>
        {cards}
        <Icon src={LandingWaves} className={classes.waves} />
      </div>
      <div className={classnames(classes.cardsMobile, classes.onlyMobile)}>
        <Icon src={LandingWavesMobile} className={classes.mobileWave} />
        <Carousel items={cards} className={classes.carousel} />
      </div>
    </>
  )
}

export default CardsGroup
