import React from 'react'
import dayjs from 'dayjs'
import { Link, useParams, useHistory } from 'react-router-dom'
import useMediaQuery from '~/src/hooks/useMediaQuery'

import Button from '~/src/modules/MainApp/components/Button/Default/Orange'
import ImageAsBackround from '~/src/modules/MainApp/components/ImageAsBackground'
import useGroupQuery from '../../hooks/useGroupQuery'
import classes from './styles.module.scss'
const BREAK_POINT = '(max-device-width: 768px)'

const EndPublish = () => {
  const history = useHistory()
  const { groupId } = useParams()
  const isMobile = useMediaQuery(BREAK_POINT)
  const { group, loading } = useGroupQuery(groupId)

  if (loading) return null
  const { product } = group
  const expireDate = dayjs(group.expiresAt).format('DD/MM/YYYY HH:mm A')

  return (
    <div className={classes.publishProduct}>
      <a className={classes.homeLink}>
        &#60;  Volver a la pagina principal
      </a>
      <h1 className={classes.title}>Publicar Producto</h1>
      <div className={classes.container}>
        <h1>¡Listo! Ya publicaste tu producto</h1>
        <h2>Tené en cuenta que tu publicación puede tardar unos minutos en aparecer.</h2>

        <div className={classes.info}>
          <div className={classes.bigItem}>
            <ImageAsBackround
              imageUrl={product.photos[0].url}
              className={classes.image}
            />
            <div className={classes.text}>
              <p>{product.name}</p>
              <div className={classes.price}>
                <span>${product.marketPrice}</span>
                <p>${product.price}</p>
              </div>
            </div>
          </div>

          <div className={classes.price}>
            <p>Precio</p>
            ${product.price}
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
          <Button onClick={() => history.push('/mis-productos/nuevo')}>Cargar otro producto</Button>
          <p>{isMobile ? '' : 'o'}
            <Link to='/mis-productos'>
              Ir a Mis publicaciones &#62;
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default EndPublish
