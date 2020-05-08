import React, { useState, forwardRef, useEffect } from 'react'
import Picker from 'react-mobile-picker-scroll'

function generateNumberArray (begin, end) {
  let array = []
  for (let i = begin; i <= end; i++) {
    array.push((i < 10 ? '0' : '') + i)
  }
  return array
}

const TimePicker = ({ setTimeString }, ref) => {
  const [valueGroups, setValueGroups] = useState({ hour: '01', minute: '00', zone: 'PM' })
  useEffect(() => {
    const timeString = valueGroups.hour + ':' + valueGroups.minute + ' ' + valueGroups.zone
    setTimeString(timeString)
  })
  const optionGroups = {
    hour: generateNumberArray(0, 12),
    minute: generateNumberArray(0, 59),
    zone: ['AM', 'PM']
  }

  // Update the value in response to user picking event
  const handleChange = (name, value) => {
    setValueGroups({ ...valueGroups, [name]: value })
  }

  return (
    <div ref={ref}>
      <Picker
        optionGroups={optionGroups}
        valueGroups={valueGroups}
        onChange={handleChange}
      />
    </div>
  )
}

export default forwardRef(TimePicker)
