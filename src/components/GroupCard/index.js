import React from 'react'

import GroupProgress from '../GroupProgress'
import currency from '../../utils/currency'
import { CardTimer } from '../Timer'
import { useHistory } from 'react-router-dom'
import { Small as DiscountBadget } from '../../components/DiscountBadget'

import classes from './styles.module.scss'

const GroupCard = ({
  productPictureURL,
  price,
  marketPrice,
  type,
  minParticipants = 0,
  currentParticipants = 0,
  expiresAt,
  groupId,
  isSubscribed,
  title = '',
  description = '',
  colors = []
}) => {
  const history = useHistory()

  const goToCheckout = () => {
    history.push(`/product-detail/${groupId}`)
  }

  return (
    <div
      className={classes.container}
      onClick={goToCheckout}
    >
      <CardTimer expiresAt={expiresAt} />
      <DiscountBadget
        oldPrice={marketPrice}
        price={price}
        topPosition='44.42%'
        rightPosition='6.49%'
        bottomPosition='45.12'
        leftPosition='77.27%'
      />
      <div className={classes.picture}>
        <img src={productPictureURL} alt='group' />
      </div>
      <div className={classes.detail}>
        <div className={classes.amount}>
          <span className={classes.oldPrice}>{currency.ARS(marketPrice)}</span>
          <span className={classes.price}>{currency.ARS(price)}</span>
        </div>
        <div className={classes.description}>
          <p className={classes.title}>{title}</p>
          <p className={classes.title}>{description}</p>
        </div>
        <div className={classes.color}>
          <span>Colors: {colors.join(', ')}</span>
        </div>
        <div className={classes.groupProgress}>
          <GroupProgress
            currentParticipants={currentParticipants}
            minParticipants={minParticipants}
            type={type}
          />
        </div>
      </div>
    </div>
  )
}

export default GroupCard
