import React, { useState } from 'react'
import LoadPhoto from './LoadPhoto'

import './PublishProduct.scss'

const ProductForm = (props) => {
  const [productPhotosUrls, setProductPhotosUrls] = useState([''])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [priceString, setPrice] = useState('')
  const [marketPriceString, setMarketPrice] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()

    const price = parseFloat(priceString)
    const marketPrice = parseFloat(marketPriceString)

    props.product({ productPhotosUrls, name, description, price, marketPrice })
    props.nextStep()
  }

  const handlePhotos = ({ photo, photoIndex }) => {
    const photosToModify = [...productPhotosUrls]

    if (!photo) {
      photosToModify.splice(photoIndex, 1)
    } else {
      photosToModify[photoIndex] = photo
    }

    return setProductPhotosUrls([...photosToModify.filter(item => item), ''])
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
        <label>Fotos</label>
        {
          productPhotosUrls.map((photo, index) => (
            <LoadPhoto
              key={`load-photo-${index}`}
              photoIndex={index}
              handleSetPhoto={handlePhotos}
              photo={photo}
            />
          ))
        }
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
