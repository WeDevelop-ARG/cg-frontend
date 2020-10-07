import React from 'react'
import { CardTimer } from '~/src/modules/MainApp/components/Timer'
import GroupProgress from '~/src/modules/MainApp/components/GroupProgress'

import ProductInfo from '../ProductInfo'
import Prices from '../Prices'
import PurchaseOptions from '../PurchaseOptions'

import classes from './styles.module.scss'

const PurchasedItem = ({ group }) => {
  const product = group.product

  return (
    <div className={classes.item}>
      <ProductInfo discount={group.discount} name={product.name} productPhotoUrl={product.photos[0].url} />
      <Prices oldPrice={product.marketPrice} newPrice={product.price} />
      <GroupProgress
        currentParticipants={group.participantsCount}
        minParticipants={group.minParticipants}
        type={group.type}
      />
      <div className={classes.expiresAt}>
        <CardTimer className={classes.Timer} expiresAt={group.expiresAt} />
      </div>
      <PurchaseOptions />
    </div>
  )
}

export default PurchasedItem
