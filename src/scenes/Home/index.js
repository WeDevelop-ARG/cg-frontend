import React from 'react'

import './Landing.scss'
import useGroupsQuery from '../../hooks/useGroupsQuery'

// components
import GroupCard from '../../components/GroupCard'
import Banner from '../../components/HomeBanner'

const Landing = (props) => {
  const { groups } = useGroupsQuery()

  return (
    <>
      <Banner />
      <div className='Landing'>
        <h2 className='Landing--category-title'>Los más populares</h2>
        <div className='Landing__main-container'>
          {
            groups.map((group) => (
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
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Landing
