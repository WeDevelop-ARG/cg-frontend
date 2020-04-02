import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMale } from '@fortawesome/free-solid-svg-icons'

const Unit = ({ isFull = false }) => {
  const getColorType = () => {
    if (!isFull) return '#FA9079'

    return '#EB5433'
  }

  return <FontAwesomeIcon color={getColorType()} className='group-progress__unit' icon={faMale} />
}

export default Unit
