import React from 'react'
import ArrowLeftBlack from '../../vectors/arrow-left.svg'
import ArrowLeftYellow from '../../vectors/arrow-left-y.svg'

import ArrowRightBlack from '../../vectors/arrow-right.svg'
import ArrowRightYellow from '../../vectors/arrow-right-y.svg'

import './Arrow.scss'

const getDirection = (color, direction) => {
  if (color === 'yellow') {
    if (direction === 'left') return ArrowLeftBlack

    return ArrowRightBlack
  }

  if (direction === 'left') return ArrowLeftYellow

  return ArrowRightYellow
}

const Arrow = ({ color, direction, ...props }) => {
  const getStyles = () => {
    if (color === 'yellow') return { color: 'Arrow--yellow', vector: getDirection(color, direction) }

    return {
      color: 'Arrow--black',
      vector: getDirection(color, direction)
    }
  }

  return (
    <button type='button' {...props} className={getStyles().color}>
      <img src={getStyles().vector} alt='arrow' />
    </button>
  )
}

export default Arrow
