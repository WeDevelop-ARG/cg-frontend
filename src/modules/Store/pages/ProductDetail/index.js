import React, { useState, useContext } from 'react'
import useGroupQuery from '~/src/hooks/useGroupQuery'
import useSubscribeToGroup from '~/src/hooks/useSubscribeToGroupMutation'
import AuthContext from '~/src/Contexts/AuthContext/context'
import Loading from '~/src/components/Loading'

import { useParams, Redirect, useHistory } from 'react-router-dom'

import EndCheckout from '~/src/scenes/Checkout/EndCheckout'

import Descriptions from './Descriptions'
import Pictures from './Pictures'

import classes from './styles.module.scss'

const ProductDetail = () => {
  const { status: isLogged, currentUser } = useContext(AuthContext)
  const { groupId } = useParams()
  const { group, loading } = useGroupQuery(groupId)
  const { subscribeToGroup, loading: subscribeLoading } = useSubscribeToGroup()
  const [endCheckout, setEndCheckout] = useState(false)
  const history = useHistory()

  if (loading || subscribeLoading) return <Loading />

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

  const {
    name = product.name || '',
    marketPrice: oldPrice = product.oldPrice || 0,
    price = product.price || 0,
    brand = product.brand || 'Desconocida',
    colors = product.colors || ['Rojo', 'Azul', 'Blanco'],
    description = product.description || '',
    photos = product.photos || []
  } = product

  const {
    participantsCount: currentParticipants = 0,
    minParticipants = 0,
    expiresAt
  } = group

  const getUrls = ({ url }) => url
  const photosUrls = photos.map(getUrls)

  return (
    <div className={classes.container}>
      <div className={classes.productDetail}>
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
