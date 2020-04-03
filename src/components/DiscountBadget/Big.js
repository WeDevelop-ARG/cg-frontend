import React from 'react'
import getPercent from './getPercent'
import BadgetIcon from '../../vectors/badget.svg'

import './DiscountBadget.scss'

const DiscountBadgetBig = ({
  oldPrice, price, topPosition = 0, rightPosition = 0, bottomPosition = 0, leftPosition = 0
}) => {
  const percent = getPercent(oldPrice, price)

  return (
    <div
      className='discount-badget--big'
      style={{ top: topPosition, right: rightPosition, left: leftPosition, bottom: bottomPosition }}
    >
      <span className='discount-badget--big--message'>Ahorrá hasta un</span>
      <div className='discount-badget--big--percent'>
        <img className='discount-badget--big--icon' src={BadgetIcon} alt='badget' />
        <span>{`${percent}%`}</span>
      </div>
    </div>
  )
}

export default DiscountBadgetBig
