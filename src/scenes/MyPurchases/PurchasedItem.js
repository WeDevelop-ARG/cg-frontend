import React from 'react'
import { CardTimer } from '../../components/Timer'
import GroupProgress from '../../components/GroupProgress'

import classes from './styles.module.scss'
import PriceTag from '../../vectors/price-tag.svg'
import MoreBtn from '../../vectors/more-vertical.svg'
import ShareBtn from '../../vectors/share.svg'

const PurchasedItem = ({ group }) => {
  console.log(group)
  const product = group.product
  const personsLeft = group.minParticipants - group.participantsCount

  return (
    <div className={classes.item}>
      <div className={classes.productData}>
        <div
          className={classes.image}
          style={{
            backgroundImage: `url(${product.photos[0].url})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
          }}
        />
        <div className={classes.info}>
          <span><img src={PriceTag} alt='' /> {group.discount}% AHORRO</span>
          <p>{product.name}</p>
        </div>
      </div>
      <div className={classes.prices}>
        <span>${product.marketPrice}</span>
        <p>${product.price}</p>
      </div>
      <div className={classes.group}>
        <p>Faltan {personsLeft} personas</p>
        <GroupProgress
          currentParticipants={group.currentParticipants}
          minParticipants={group.minParticipants}
          type={group.type}
        />
      </div>
      <div className={classes.expiresAt}>
        <CardTimer className={classes.Timer} expiresAt={group.expiresAt} />
      </div>
      <div className={classes.more}>
        <img src={ShareBtn} alt='<' />
        <img src={MoreBtn} alt=':' />
      </div>
    </div>
  )
}

export default PurchasedItem
