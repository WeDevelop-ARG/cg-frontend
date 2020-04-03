import React from 'react'

import './Landing.scss'
import useGroupsQuery from '../../hooks/useGroupsQuery'

// components
import GroupCard from '../../components/GroupCard'
import Navbar from '../../components/Navbar'

const Landing = (props) => {
  const { groups } = useGroupsQuery()

  return (
    <div className='Landing'>
      <div className='Landing__wantsales'>
        <Navbar />
      </div>
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
      <div className='Landing__wantsales'>
        <button type='button' name='want-sales'>
          Quiero vender
        </button>
      </div>
    </div>
  )
}

export default Landing
