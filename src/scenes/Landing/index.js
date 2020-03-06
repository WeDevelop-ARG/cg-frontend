import React from 'react'

import './Landing.scss'
import useGroupsQuery from '../../hooks/useGroupsQuery'

// components
import GroupCard from '../../components/GroupCard'

const Landing = () => {
  const { groups } = useGroupsQuery()

  console.log(groups)

  return (
    <div className='Landing'>
      <h1>Group List</h1>
      <div className='Landing__main-container'>
        {
          groups.map((group) => (
            <GroupCard
              key={group.id}
              productPicture={group.product.photoUrl}
              marketPrice={group.product.marketPrice}
              price={group.product.price}
              minParticipants={group.minParticipants}
              actualParticipants={group.participantsCount}
              productId={group.product.id}
              groupId={group.id}
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
