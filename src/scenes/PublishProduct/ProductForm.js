import React, { useState } from 'react'

import './PublishProduct.scss'

const ProductForm = (props) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [photoUrl, setPhoto] = useState('')
  const [priceString, setPrice] = useState('')
  const [marketPriceString, setMarketPrice] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()

    const price = parseFloat(priceString)
    const marketPrice = parseFloat(marketPriceString)

    props.product({ photoUrl, name, description, price, marketPrice })
    props.nextStep()
  }

  const encodeImage = event => {
    const reader = new FileReader()
    reader.onloadend = function () {
      setPhoto(reader.result)
    }
    const file = event.target.files[0]
    if (file) {
      reader.readAsDataURL(file)
    } else {
      setPhoto('')
    }
  }

  return (
    <div className='Publish'>
      <form onSubmit={handleSubmit}>
        <h1>Informacion del Producto</h1>
        <input
          type='text'
          value={name}
          placeholder='Nombre'
          id='name'
          onChange={event => setName(event.target.value)}
          required
        />

        <input
          type='text'
          value={description}
          placeholder='Descripcion'
          id='description'
          onChange={event => setDescription(event.target.value)}
        />

        <div className='Publish--image-upload'>
          {photoUrl && <img src={photoUrl} />}
          <input
            type='file'
            placeholder='URL de la foto'
            id='photo'
            onChange={encodeImage}
            required
          />
        </div>

        <input
          type='text'
          value={priceString}
          placeholder='Precio'
          id='price'
          onChange={event => setPrice(event.target.value)}
          required
        />

        <input
          type='text'
          value={marketPriceString}
          placeholder='Precio del mercado'
          id='marketPrice'
          onChange={event => setMarketPrice(event.target.value)}
          required
        />

        <button type='submit'>Siguiente</button>
      </form>
    </div>
  )
}

export default ProductForm
