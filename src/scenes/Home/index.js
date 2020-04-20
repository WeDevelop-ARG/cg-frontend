import React from 'react'

import './Landing.scss'
import useGroupsQuery from '../../hooks/useGroupsQuery'

// components
import GroupCard from '../../components/GroupCard'
import Banner from '../../components/HomeBanner'

const Landing = (props) => {
  const { groups } = useGroupsQuery()

  const SIZE_FILTER = 8
  const categories = {
    par: {
      title: 'Compra en dúo',
      group: []
    },
    small: {
      title: 'Grupos pequeños',
      group: []
    },
    big: {
      title: 'Grupos grandes',
      group: []
    }
  }

  groups.forEach(group => {
    if (group.type === 'GROUP') {
      return group.minParticipants <= SIZE_FILTER ? categories.small.group.push(group) : categories.big.group.push(group)
    }

    return categories.par.group.push(group)
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
        {
          Object.keys(categories).map((cat) => (
            <div key={cat}>
              <h2 className='Landing--category-title'>{categories[cat].title}</h2>
              <div className='Landing__main-container'>
                {categories[cat].group.map(group => getGroupCard(group))}
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Landing
