import React from 'react'

import GroupProgress from '../GroupProgress'
import currency from '../../utils/currency'
import { useHistory } from 'react-router-dom'

import './styles.scss'

const GroupCard = ({
  productPicture,
  price,
  marketPrice,
  minParticipants = 0,
  currentParticipants = 0,
  groupId,
  isSubscribed,
  title = '',
  description = '',
  colors = []
}) => {
  const history = useHistory()

  const goToCheckout = () => {
    history.push(`/checkout/${groupId}`)
  }

  return (
    <div className='group-card' onClick={() => goToCheckout()}>
      <div className='group-card__pic'>
        <img src={productPicture} className='GroupCard--image' alt='group' />
      </div>
      <div className='group-card__detail'>
        <div className='group-card__detail--amount'>
          <span className='group-card__detail--amount--old-price'>{currency.ARS(marketPrice)}</span>
          <span className='group-card__detail--amount--price'>{currency.ARS(price)}</span>
        </div>
        <div className='group-card__detail--description'>
          <p className='group-card__detail--description--title'>{title}</p>
          <p className='group-card__detail--description--title'>{description}</p>
        </div>
        <div className='group-card__detail--color'>
          <span>Colors: {colors.join(', ')}</span>
        </div>
        <div className='group-card__detail--group-progress'>
          <GroupProgress currentParticipants={currentParticipants} minParticipants={minParticipants} />
        </div>
      </div>
    </div>
  )
}

export default GroupCard
