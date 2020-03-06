import React, { useEffect, useState } from 'react'
// import useCheckoutMutation from '../../hooks/useCheckoutMutation'
import useGroupQuery from '../../hooks/useGroupQuery'
import useSubscribeToGroup from '../../hooks/useSubscribeToGroupMutation'
import MercadoPago, { getPaymentMethodPromise, createTokenByDOM } from '../../MercadoPago'
import { useParams, Redirect } from 'react-router-dom'

import EndCheckout from './EndCheckout'

import './Checkout.scss'

const Checkout = () => {
  const { groupId } = useParams()
  const { group, loading } = useGroupQuery(groupId)
  const { subscribeToGroup } = useSubscribeToGroup()

  const [mercadoPagoPaymentMethod, setMercadoPagoPaymentMethod] = useState()
  const [email, setEmail] = useState('')
  const [endCheckout, setEndCheckout] = useState(false)

  if (!group && !loading) return <Redirect to='/' />

  const product = group && group.product

  // used in some fields events for security precautions
  // like onCopy, onPaste, onCut, etc
  const disableAction = (e) => e.preventDefault()

  const onSubmit = async (e) => {
    e.preventDefault()
    const token = await createTokenByDOM({ paymentMethodId: mercadoPagoPaymentMethod })

    const paymentMethod = {
      accountEmail: email,
      paymentMethod: mercadoPagoPaymentMethod,
      token
    }

    const userId = '9c3859b0-5efe-11ea-bc55-0242ac130003'

    await subscribeToGroup({ groupId, userId, paymentMethod })

    setEndCheckout(true)
  }

  const onChangeCreditCardNumber = async (number = '') => {
    if (number.length >= 6) {
      const { id: paymentMethod } = await getPaymentMethodPromise({ bin: number.substring(0, 6) })

      setMercadoPagoPaymentMethod(paymentMethod)
    }
  }

  useEffect(() => {
    MercadoPago.getIdentificationTypes()
  }, [])

  if (endCheckout) return <EndCheckout product={product} />

  if (loading) {
    return (
      <div>
        <h1>... Loading</h1>
      </div>
    )
  }
  return (
    <div className='Checkout'>
      <h1>{`${product.name} $${product.price}`}</h1>
      <img src={product.photoUrl} alt={product.name} />
      <h2>{product.description}</h2>
      <form onSubmit={onSubmit} id='mercadopagoCheckoutForm' style={{ display: 'hidden' }}>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='your email'
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
        <div>
          <label htmlFor='cardNumber'>Credit Card Number:</label>
          <input
            type='text'
            id='cardNumber'
            data-checkout='cardNumber'
            placeholder='4509 9535 6623 3704'
            onPaste={disableAction}
            onCopy={disableAction}
            onCut={disableAction}
            onDrag={disableAction}
            onDrop={disableAction}
            onChange={({ target }) => onChangeCreditCardNumber(target.value)}
            autoComplete='off'
          />
        </div>
        <div>
          <label htmlFor='securityCode'>Security code:</label>
          <input
            type='text'
            id='securityCode'
            data-checkout='securityCode'
            placeholder='123'
            onPaste={disableAction}
            onCopy={disableAction}
            onCut={disableAction}
            onDrag={disableAction}
            onDrop={disableAction}
            autoComplete='off'
          />
        </div>
        <div>
          <label htmlFor='cardExpirationMonth'>Expiration month:</label>
          <input
            type='text'
            id='cardExpirationMonth'
            data-checkout='cardExpirationMonth'
            placeholder='11'
            onPaste={disableAction}
            onCopy={disableAction}
            onCut={disableAction}
            onDrag={disableAction}
            onDrop={disableAction}
            autoComplete='off'
          />
        </div>
        <div>
          <label htmlFor='cardExpirationYear'>Expiration year:</label>
          <input
            type='text'
            id='cardExpirationYear'
            data-checkout='cardExpirationYear'
            placeholder='2025'
            onPaste={disableAction}
            onCopy={disableAction}
            onCut={disableAction}
            onDrag={disableAction}
            onDrop={disableAction}
            autoComplete='off'
          />
        </div>
        <div>
          <label htmlFor='cardholderName'>Card holder name:</label>
          <input
            type='text'
            id='cardholderName'
            data-checkout='cardholderName'
            placeholder='APRO'
          />
        </div>
        <div>
          <label htmlFor='docType'>Document type:</label>
          <select id='docType' data-checkout='docType' />
        </div>
        <div>
          <label htmlFor='docNumber'>Document number:</label>
          <input
            type='text'
            id='docNumber'
            data-checkout='docNumber'
            placeholder='12345678'
          />
        </div>
        <input type='hidden' name='amount' id='amount' value={product.price} />
        <input type='hidden' name='description' />
        <input type='submit' value='Pay!' />
      </form>
    </div>
  )
}

export default Checkout
