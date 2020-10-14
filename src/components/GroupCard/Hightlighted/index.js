import React from 'react'
import currency from '../../../utils/currency'
import classes from './styles.module.scss'
import GroupProgress from '../../GroupProgress'
import Button from '../../Button'
import { CardTimerBig } from '../../Timer'
import { Medium as DiscountBadget } from '../../DiscountBadget'
import { useHistory, useRouteMatch } from 'react-router-dom'

const HightLighted = ({
  productPictureURL,
  price,
  marketPrice,
  type,
  minParticipants = 0,
  currentParticipants = 0,
  expiresAt,
  groupId,
  title = '',
  description = '',
  colors = []
}) => {
  const { path } = useRouteMatch()
  const history = useHistory()

  const goToProductHandler = () => history.push(`${path}/product-detail/${groupId}`)
  return (
    <div className={classes.container}>
      <CardTimerBig expiresAt={expiresAt} />
      <DiscountBadget
        oldPrice={marketPrice}
        price={price}
        topPosition='12px'
        leftPosition='20px'
      />
      <div className={classes.imageContainer}>
        <img className={classes.image} alt='group' src={productPictureURL} />
      </div>
      <div className={classes.details}>
        <div className={classes.prices}>
          <span className={classes.oldPrice}>{currency.ARS(marketPrice)}</span>
          <span className={classes.price}>{currency.ARS(price)}</span>
        </div>
        <span className={classes.title}>{title}</span>
        <span className={classes.description}>{description}</span>
        <span className={classes.colors}>{colors.join(', ')}</span>
        <div className={classes.progress}>
          <GroupProgress
            type={type}
            currentParticipants={currentParticipants}
            minParticipants={minParticipants}
          />
          <Button onClick={goToProductHandler}>Ver Oferta</Button>
        </div>
      </div>
    </div>
  )
}

export default HightLighted
