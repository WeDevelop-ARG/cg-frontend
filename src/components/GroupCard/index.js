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
    <div className='GroupCard' onClick={() => goToCheckout()}>
      <img src={productPicture} className='GroupCard--image' alt='group' />
      <div className='GroupCard--prices'>
        <span className='GroupCard--prices__market'>${marketPrice}</span>
        <span className='GroupCard--prices__price'>${price}</span>
      </div>
      <div className='GroupCard--details'>
        <p className='GroupCard--details__detail'>
          "Lorem ipsum dolor sit amet, consectetaur adipisicing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </p>
        <p className='GroupCard--details__qualities'>
          "Lorem ipsum dolor sit amet"
        </p>
      </div>
      <div className='GroupCard--sales'>
        <span>{`${actualParticipants}/${minParticipants}`}</span>
      </div>
    </div>
  )
}

export default GroupCard
