import React from 'react'

import './Landing.scss'
import useGroupsQuery from '../../hooks/useGroupsQuery'

// components
import GroupCard from '../../components/GroupCard'
import Banner from '../../components/HomeBanner'

const Landing = (props) => {
  const { groups } = useGroupsQuery()

  const SIZE_FILTER = 8
  const parGroup = []
  const smallGroup = []
  const bigGroup = []

  groups.forEach(group => {
    if (group.type === 'GROUP') {
      return group.minParticipants <= SIZE_FILTER ? smallGroup.push(group) : bigGroup.push(group)
    }

    return parGroup.push(group)
  })

  const getGroupCard = (group) => {
    return (
      <GroupCard
        key={group.id}
        productPicture={group.product.photoUrl}
        marketPrice={group.product.marketPrice}
        price={group.product.price}
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

  return (
    <>
      <Banner />
      <div className='Landing'>
        <h2 className='Landing--category-title'>Compra en dúo</h2>
        <div className='Landing__main-container'>
          {
            parGroup.map(group => getGroupCard(group))
          }
        </div>
        <h2 className='Landing--category-title'>Grupos pequeños</h2>
        <div className='Landing__main-container'>
          {
            smallGroup.map(group => getGroupCard(group))
          }
        </div>
        <h2 className='Landing--category-title'>Grupos grandes</h2>
        <div className='Landing__main-container'>
          {
            bigGroup.map(group => getGroupCard(group))
          }
        </div>
      </div>
    </>
  )
}

export default Landing
