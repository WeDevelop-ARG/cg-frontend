import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'

const TIME_RECALCULATE_TIME_LEFT_IN_MS = 1000

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
    const timer = setTimeout(() => { setTimeLeft(calculateTimeLeft()) }, TIME_RECALCULATE_TIME_LEFT_IN_MS)

    return () => clearTimeout(timer)
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
    <>
      {timerComponents.length ? timerComponents : <span>EXPIRED</span>}
    </>
  )
}

export default Timer
