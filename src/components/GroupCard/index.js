import React from 'react'
import { useHistory } from 'react-router-dom'

import './GroupCard.scss'

const time = '00:02:00'

const GroupCard = ({
  productPicture, price, marketPrice, minParticipants, actualParticipants, groupId, isSubscribed
}) => {
  const history = useHistory()

  const goToCheckout = () => {
    history.push(`/checkout/${groupId}`)
  }

  return (
    <div className='GroupCard'>
      <img src={productPicture} className='GroupCard--image' alt='group' />
      <div className='GroupCard--details'>
        <div className='GroupCard--prices'>
          <span className='GroupCard--prices__market'>${marketPrice}</span>
          <span className='GroupCard--prices__price'>${price}</span>
        </div>
        <div className='GroupCard--sales'>
          <span>{`${actualParticipants}/${minParticipants}`}</span>
          <span>{time}</span>
        </div>
        <div className='GroupCard--button'>
          <button disabled={isSubscribed} type='button' onClick={() => goToCheckout()}>Compre Ahora</button>
        </div>
      </div>
    </div>
  )
}

export default GroupCard
