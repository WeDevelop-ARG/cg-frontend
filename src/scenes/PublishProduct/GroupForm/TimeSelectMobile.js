import React, { useState } from 'react'
import Picker from 'react-mobile-picker-scroll'

function generateNumberArray(begin, end) {
  const array = []
  for (let i = begin; i <= end; i++) {
    array.push((i < 10 ? '0' : '') + i)
  }
  return array
}

const TimePicker = () => {
  const [valueGroups, setValueGroups] = useState({title: 'Mr.', firstName: 'Micheal', secondName: 'Jordan'})
  const optionGroups = {
    title: ['Mr.', 'Mrs.', 'Ms.', 'Dr.'],
    firstName: ['John', 'Micheal', 'Elizabeth'],
    secondName: ['Lennon', 'Jackson', 'Jordan', 'Legend', 'Taylor']
  }

  // Update the value in response to user picking event
  const handleChange = (name, value) => {
    setValueGroups({ ...valueGroups, [name]: value })
  }

  return (
    <Picker
      optionGroups={optionGroups}
      valueGroups={valueGroups}
      onChange={handleChange}
    />
  )
}

export default TimePicker
