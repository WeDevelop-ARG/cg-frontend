import React, { useState, useEffect } from 'react'

import classes from './time.module.scss'

const TimeSelect = ({ setTimeString }) => {
  const [time, setTime] = useState({ hours: '11', minutes: '59', zone: 'PM' })
  useEffect(() => {
    const timeString = time.hours + ':' + time.minutes + ' ' + time.zone
    setTimeString(timeString)
  })

  const buttonClass = (select) => {
    return select === time.zone ? classes.buttonNot : classes.buttonYes
  }

  const handleChange = (event) => {
    const name = event.target.name
    const OldValue = event.target.value

    if (name === 'hours') event.target.value = OldValue < 0 ? '' : OldValue > 12 ? 12 : OldValue
    if (name === 'minutes') event.target.value = OldValue < 0 ? '' : OldValue > 59 ? 59 : OldValue

    setTime({ ...time, [name]: event.target.value })
  }

  const handleBlur = (event) => {
    const name = event.target.name
    const OldValue = event.target.value

    if (name === 'hours' && (OldValue === '' || OldValue < 1)) event.target.value = 11
    if (name === 'minutes' && OldValue === '') event.target.value = 59

    setTime({ ...time, [name]: event.target.value })
  }

  const dontSubmit = (event) => {
    if (event.which === 13 /* Enter */) {
      event.preventDefault()
    }
  }

  return (
    <div className={classes.container}>
      <input type='number' autoComplete='off' placeholder='11' name='hours' onInput={handleChange} onBlur={handleBlur} onKeyPress={dontSubmit} />
      :
      <input type='number' autoComplete='off' placeholder='59' name='minutes' onInput={handleChange} onBlur={handleBlur} onKeyPress={dontSubmit} />
      <button className={buttonClass('AM')} name='zone' value='AM' onClick={handleChange} type='button'>AM</button>
      <button className={buttonClass('PM')} name='zone' value='PM' onClick={handleChange} type='button'>PM</button>
    </div>
  )
}

export default TimeSelect
