import React from 'react'
import getPercent from './getPercent'

import './DiscountBadget.scss'

const DiscountBadgetSmall = ({
  oldPrice, price, topPosition = 0, rightPosition = 0, bottomPosition = 0, leftPosition = 0
}) => {
  const percent = getPercent(oldPrice, price)

  return (
    <div
      className='discount-badget--small'
      style={{ top: topPosition, right: rightPosition, left: leftPosition, bottom: bottomPosition }}
    >
      <span className='discount-badget--small--message'>Ahorrá</span>
      <span className='discount-badget--small--percent'>{`${percent}%`}</span>
    </div>
  )
}

export default DiscountBadgetSmall
