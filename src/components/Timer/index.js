import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'

import './timer.scss'
import TimerIcon from '../../vectors/timer.svg'

const Timer = ({ expiresAt }) => {
  const expireDate = dayjs(expiresAt)

  const calculateTimeLeft = () => {
    const now = dayjs()
    const difference = expireDate.diff(now)
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        hours: expireDate.diff(now, 'hour'),
        minutes: dayjs(difference).minute(),
        seconds: dayjs(difference).second()
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  })

  const timerComponents = []

  Object.keys(timeLeft).forEach(interval => {
    let prefix = ''
    if (!timeLeft[interval] || timeLeft[interval] < 10) {
      prefix = '0'
    }

    timerComponents.push(
      <span key={interval}>
        {interval !== 'hours' ? ':' : ''}{prefix}{timeLeft[interval]}
      </span>
    )
  })

  return (
    <div className='Timer'>
      <img className='Timer__icon' src={TimerIcon} alt='&#128337' />
      {timerComponents.length ? timerComponents : <span>EXPIRED</span>}
    </div>
  )
}

export default Timer
