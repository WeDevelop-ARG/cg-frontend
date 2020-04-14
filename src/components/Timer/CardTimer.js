import React from 'react'

import './timer.scss'
import Timer from './Timer'
import TimerIcon from '../../vectors/timer.svg'

const CardTimer = ({ expiresAt }) => {
  return (
    <div className='CardTimer'>
      <img className='CardTimer__icon' src={TimerIcon} alt='&#128337' />
      <Timer className='CardTimer__countdown' expiresAt={expiresAt} />
    </div>
  )
}

export default CardTimer
