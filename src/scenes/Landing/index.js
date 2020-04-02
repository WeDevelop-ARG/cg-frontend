import React from 'react'

import './Landing.scss'
import useGroupsQuery from '../../hooks/useGroupsQuery'
import { useHistory } from 'react-router-dom'

// components
import GroupCard from '../../components/GroupCard'
import Status from '../../components/Auth/Status'

const Landing = (props) => {
  const { groups } = useGroupsQuery()

  const history = useHistory()

  const goToSignin = () => {
    history.push('/auth/signin')
  }

  const goToSignup = () => {
    history.push('/auth/signup')
  }

  console.log(groups)

  return (
    <div className='Landing'>
      <div className='Landing__wantsales'>
        <Status />
        <br />
        <button type='button' name='signin' onClick={() => goToSignin()}>
        SignIn
        </button>
        <button type='button' name='signup' onClick={() => goToSignup()}>
        SignUp
        </button>
      </div>
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
