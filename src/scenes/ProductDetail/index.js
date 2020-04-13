import React, { useState, useContext } from 'react'
import useGroupQuery from '../../hooks/useGroupQuery'
import useSubscribeToGroup from '../../hooks/useSubscribeToGroupMutation'
import AuthContext from '../../Contexts/AuthContext/context'

import { Link, useParams, Redirect, useHistory } from 'react-router-dom'

import EndCheckout from '../Checkout/EndCheckout'

import './ProductDetail.scss'
import Descriptions from './Descriptions'

import { Big as DiscountBadget } from '../../components/DiscountBadget'

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
    photoUrl = ''
  } = product

  const {
    participantsCount: currentParticipants = 0,
    minParticipants = 0
  } = group

  return (
    <div className='product-detail--container'>
      <div className='product-detail'>
        <div className='product-detail__pictures'>
          <DiscountBadget
            oldPrice={oldPrice}
            price={price}
            topPosition='116px'
            leftPosition='-18px'
          />
          <Link to='/' className='product-detail__pictures__home-link'>
            <span>{'<'}</span>
            <span>Volver a la página principal</span>
          </Link>
          <div
            className='product-detail__pictures__img'
            style={{ backgroundImage: `url(${photoUrl})` }}
          />
        </div>
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
        />
      </div>
    </div>
  )
}

export default ProductDetail
