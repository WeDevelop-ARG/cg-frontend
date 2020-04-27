import React from 'react'

import {
  Normal as GroupCard,
  Hightlighted as GroupCardHightlighted
} from '../GroupCard'

import sortGroupsByDiscountPercent from './sortGroupsByDiscountPercent'

import classes from './styles.module.scss'

const CategoryDisplay = ({ title, groups }) => {
  return (
    <div>
      <h2 className={classes.title}>
        {title}
      </h2>
      <div className={classes.groups}>
        {sortGroupsByDiscountPercent(groups).map(renderGroupCard)}
      </div>
    </div>
  )
}

const renderGroupCard = (group, index) => {
  const Card = index === 0 ? GroupCardHightlighted : GroupCard

  return (
    <Card
      key={group.id}
      productPictureURL={group.product.photos[0].url}
      marketPrice={group.product.marketPrice}
      price={group.product.price}
      type={group.type}
      minParticipants={group.minParticipants}
      currentParticipants={group.participantsCount}
      expiresAt={group.expiresAt}
      productId={group.product.id}
      groupId={group.id}
      isSubscribed={group.isSubscribed}
      colors={['Azul', 'Rojo', 'Negro']} // TODO this must come from backend
      title={group.product.name}
      description={group.product.description}
    />
  )
}

export default CategoryDisplay
