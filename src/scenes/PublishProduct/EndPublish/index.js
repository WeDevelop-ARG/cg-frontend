import React from 'react'
import { Link } from 'react-router-dom'
import useMediaQuery from '../../../hooks/useMediaQuery'

import Button from '../../../components/Button/Default/Orange'
import classes from './styles.module.scss'
const BREAK_POINT = '(max-device-width: 576px)'

const EndPublish = (props) => {
  const isMobile = useMediaQuery(BREAK_POINT)
  const group = props.group
  const photos = group.product.productPhotosUrls
  const productPhoto = !photos ? '' : URL.createObjectURL(photos[0])
  const expireDate = new Date(group.expiresAt).toLocaleString('es-AR')

  return (
    <div className={classes.container}>
      <h1>¡Listo! Ya publicaste tu producto</h1>
      <h2>Tené en cuenta que tu publicación puede tardar unos minutos en aparecer.</h2>

      <div className={classes.info}>
        <div className={classes.bigItem}>
          <div
            className={classes.image}
            style={{
              backgroundImage: `url(${productPhoto})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center'
            }}
          />
          <div className={classes.text}>
            <p>{group.product.name}</p>
            <div className={classes.price}>
              <span>${group.product.marketPrice}</span>
              <p>${group.product.price}</p>
            </div>
          </div>
        </div>
        <div className={classes.price}>
          <p>Precio</p>
          ${group.product.price}
        </div>
        <div className={classes.discount}>
          <p>% Descuento</p>
          {group.discount}%
        </div>
        <div className={classes.persons}>
          <p>{isMobile ? 'Grupo' : 'Tamaño del grupo'}</p>
          {group.minParticipants} personas
        </div>
        <div className={classes.expiresAt}>
          <p>{isMobile ? 'Expiración:' : 'Fecha de expiración'}</p>
          {expireDate.slice(0, -3)} hs
        </div>
      </div>

      <div className={classes.links}>
        <Button onClick={() => props.reset()}>Cargar otro producto</Button>
        <p>{isMobile ? '' : 'o'}
          <Link to='/mis-productos'>
            Ir a Mis publicaciones &#62;
          </Link>
        </p>
      </div>
    </div>
  )
}

export default EndPublish
