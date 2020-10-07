import React from 'react'

import classes from './styles.module.scss'
import Timer from './Timer'
import TimerIcon from '~/src/vectors/timer.svg'

const CardTimer = ({ expiresAt }) => {
  return (
    <div className={classes.CardTimer}>
      <img className={classes.icon} src={TimerIcon} alt='&#128337' />
      <Timer className={classes.countdown} expiresAt={expiresAt} />
    </div>
  )
}

export default CardTimer
