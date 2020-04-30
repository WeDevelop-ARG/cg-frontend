import React, { useState } from 'react'

import './PublishProduct.scss'
import createGroupHandler from './createGroupHandler'
import Loading from '../../components/Loading'
import { logGAEvent } from '../../firebase.js'

const ProductForm = (props) => {
  const [type, setType] = useState('GROUP')
  const [minParticipants, setMinParticipants] = useState(2)
  const [maxParticipants, setMaxParticipants] = useState(2)
  const [discount, setDiscount] = useState(0)
  const [expiresAt, setExpiresAt] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async event => {
    event.preventDefault()

    const product = props.product

    setIsLoading(true)

    try {
      await createGroupHandler({ product, discount, expiresAt, maxParticipants, minParticipants, type })
      logGAEvent('seller_product_create', { size: minParticipants })

      setIsLoading(false)

      props.group({ product, minParticipants, discount, expiresAt })
      props.nextStep()
    } catch {
      setIsLoading(false)
    }
  }

  if (isLoading) return <Loading />

  return (
    <div className='Publish__ms-form--container'>
      <form onSubmit={handleSubmit}>
        <h1>Informacion del Grupo</h1>
        <div className='Publish--group-select'>
          <p>Tipo de grupo:</p>
          <select
            id='type'
            onChange={event => setType(event.target.value)}
          >
            <option value='GROUP'>Grupo</option>
            <option value='PAIR'>Par</option>
          </select>
        </div>

        {(type && type === 'GROUP') &&
          <>
            <input
              type='number'
              placeholder='Numero minimo de participantes'
              id='minParticipants'
              onChange={event => setMinParticipants(+event.target.value)}
              required
            />
            <input
              type='number'
              placeholder='Numero maximo de participantes'
              id='maxParticipants'
              onChange={event => setMaxParticipants(+event.target.value)}
            />
          </>}

        <input
          type='number'
          placeholder='Porcentaje de descuento'
          id='discount'
          onChange={event => setDiscount(+event.target.value)}
          required
        />

        <div className='Publish--expireDate'>
          Fecha de expiracion:
          <input
            type='datetime-local'
            placeholder='Fecha de expiracion'
            id='expiresAt'
            onChange={event => setExpiresAt(event.target.value)}
            required
          />
        </div>
        <div className='Publish--button-group'>
          <button onClick={() => props.prevStep()}>Atras</button>
          <button type='submit'>Finalizar</button>
        </div>
      </form>
    </div>
  )
}

export default ProductForm
