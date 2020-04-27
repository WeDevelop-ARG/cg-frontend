import React from 'react'

import classes from './styles.module.scss'
import Timer from './Timer'
import TimerIcon from '../../vectors/timer.svg'

const CardTimer = ({ expiresAt }) => {
  return (
    <div className={classes.CardTimer}>
      <img className={classes.icon} src={TimerIcon} alt='&#128337' />
      <span className={classes.message}>Apurate! Esta oferta termina en</span>
      <Timer className={classes.countdown} expiresAt={expiresAt} />
    </div>
  )
}

export default CardTimer
