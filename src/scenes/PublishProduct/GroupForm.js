import React, { useState } from 'react'

import useCreateGroup from '../../hooks/useCreateGroupNestedMutation'
import './PublishProduct.scss'

const ProductForm = (props) => {
  const { createGroup } = useCreateGroup()
  const [type, setType] = useState('GROUP')
  const [minParticipants, setMinParticipants] = useState(1)
  const [maxParticipants, setMaxParticipants] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [expiresAt, setExpiresAt] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()

    const product = props.product

    await createGroup({ product, type, minParticipants, maxParticipants, discount, expiresAt })

    props.nextStep()
  }

  return (
    <div className='Publish'>
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
