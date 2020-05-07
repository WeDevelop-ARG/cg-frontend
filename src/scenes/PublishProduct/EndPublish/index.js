import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../../../components/Button/Default/Orange'
import './styles.scss'

const EndPublish = (props) => {
  const group = props.group
  const photos = group.product.productPhotosUrls
  const productPhoto = !photos ? '' : URL.createObjectURL(photos[0])
  const expireDate = new Date(group.expiresAt).toLocaleString('es-AR')

  return (
    <div className='PublishEnd'>
      <h1>¡Listo! Ya publicaste tu producto</h1>
      <h2>Tené en cuenta que tu publicación puede tardar unos minutos en aparecer.</h2>
      <div className='PublishEnd__group-info'>
        <div className='PublishEnd__group-info--big-item'>
          <div
            className='PublishEnd__group-info--image'
            style={{
              backgroundImage: `url(${productPhoto})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center'
            }}
          />
          <div className='PublishEnd__group-info--big-item--text'>
            <p>{group.product.name}</p>
            <span>${group.product.marketPrice}</span>
            <p>${group.product.price}</p>
          </div>
        </div>
        <div className='PublishEnd__group-info--item'>
          <p>% Descuento</p>
          {group.discount}%
        </div>
        <div className='PublishEnd__group-info--item'>
          <p>Tamaño del grupo</p>
          {group.minParticipants} personas
        </div>
        <div className='PublishEnd__group-info--item'>
          <p>Fecha de expiración</p>
          {expireDate.slice(0, -3)} hs
        </div>
      </div>
      <div className='PublishEnd__links'>
        <Button onClick={() => props.reset()}>Cargar otro producto</Button>
        <p>o
          <Link to='/mis-productos' className='PublishEnd__links--my-products'>
            Ir a Mis publicaciones &#62;
          </Link>
        </p>
      </div>
    </div>
  )
}

export default EndPublish