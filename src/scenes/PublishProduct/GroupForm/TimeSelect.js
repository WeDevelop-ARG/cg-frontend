import React, { useState, useEffect } from 'react'

import classes from './time.module.scss'

const TimeSelect = ({ setTimeString }) => {
  const [time, setTime] = useState({ hours: '11', minutes: '59', zone: 'PM' })
  const buttonClass = (select) => {
    return select === time.zone ? classes.buttonNot : classes.buttonYes
  }
  const handleChange = (event) => {
    setTime({ ...time, [event.target.name]: event.target.value })
  }
  const dontSubmit = (event) => {
    if (event.which === 13 /* Enter */) {
      event.preventDefault()
    }
  }
  useEffect(() => {
    const timeString = time.hours + ':' + time.minutes + ' ' + time.zone
    setTimeString(timeString)
  })

  return (
    <div className={classes.container}>
      <input type='number' autoComplete='off' placeholder='11' name='hours' onInput={handleChange} onKeyPress={dontSubmit} />
      :
      <input type='number' autoComplete='off' placeholder='59' name='minutes' onInput={handleChange} onKeyPress={dontSubmit} />
      <button className={buttonClass('AM')} name='zone' value='AM' onClick={handleChange} type='button'>AM</button>
      <button className={buttonClass('PM')} name='zone' value='PM' onClick={handleChange} type='button'>PM</button>
    </div>
  )
}

export default TimeSelect
