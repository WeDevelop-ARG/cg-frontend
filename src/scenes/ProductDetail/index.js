import React, { useState, useContext } from 'react'
import useGroupQuery from '../../hooks/useGroupQuery'
import useSubscribeToGroup from '../../hooks/useSubscribeToGroupMutation'
import AuthContext from '../../Contexts/AuthContext/context'

import { useParams, Redirect, useHistory } from 'react-router-dom'

import EndCheckout from '../Checkout/EndCheckout'

import './ProductDetail.scss'
import Descriptions from './Descriptions'
import Pictures from './Pictures'

const ProductDetail = () => {
  const { status: isLogged, currentUser } = useContext(AuthContext)
  const { groupId } = useParams()
  const { group, loading } = useGroupQuery(groupId)
  const { subscribeToGroup } = useSubscribeToGroup()
  const [endCheckout, setEndCheckout] = useState(false)
  const history = useHistory()

  if (!group && !loading) return <Redirect to='/' />

  const product = group && group.product

  const onSubmit = async () => {
    if (!isLogged) {
      return history.push(`/auth/signup?redirectTo=/product-detail/${groupId}`)
    }

    const paymentMethod = {
      accountEmail: currentUser.email,
      paymentMethod: 'visa',
      token: 'token'
    }

    try {
      await subscribeToGroup({ groupId, paymentMethod })

      setEndCheckout(true)
    } catch (error) {
      const [err] = error.graphQLErrors
      window.alert(err.message)
    }
  }

  if (endCheckout) return <EndCheckout group={group} />

  if (loading) {
    return (
      <div>
        <h1>... Loading</h1>
      </div>
    )
  }

  const {
    name = '',
    marketPrice: oldPrice = 0,
    price = 0,
    brand = 'Best brand',
    colors = ['Rojo', 'Azul', 'Blancos'],
    description = '',
    photos = []
  } = product

  const {
    participantsCount: currentParticipants = 0,
    minParticipants = 0,
    expiresAt
  } = group

  const getUrls = ({ url }) => url
  const photosUrls = photos.map(getUrls)

  return (
    <div className='product-detail--container'>
      <div className='product-detail'>
        <Pictures oldPrice={oldPrice} price={price} photoUrls={photosUrls} />
        <Descriptions
          title={name}
          oldPrice={oldPrice}
          price={price}
          brand={brand}
          colors={colors}
          description={description}
          currentParticipants={currentParticipants}
          minParticipants={minParticipants}
          onBuy={onSubmit}
          expiresAt={expiresAt}
        />
      </div>
    </div>
  )
}

export default ProductDetail
