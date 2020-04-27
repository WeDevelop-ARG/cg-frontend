import React from 'react'
import { Link } from 'react-router-dom'

import MultiStepForm from './MultiStepForm'
import './PublishProduct.scss'

const PublishProduct = () => {
  return (
    <div className='Publish'>
      <Link to='/' className='Publish__go-home'>
        &#60;  Volver a la pagina principal
      </Link>
      <h1>Publicar Producto</h1>
      <div className='Publish--container'>
        <MultiStepForm className='Publish__ms-form' />
      </div>
    </div>
  )
}

export default PublishProduct
