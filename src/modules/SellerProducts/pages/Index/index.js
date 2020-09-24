import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { isEmpty } from 'lodash'
import usePublishedGroupsQuery from '../../hooks/usePublishedGroupsQuery'
import Button from '~/src/modules/MainApp/components/Button/Default/Orange'
import Loading from '~/src/modules/MainApp/components/Loading'

import classes from './styles.module.scss'
import ProductList from '../../components/ProductList'

const MyProducts = () => {
  const { loading, publishedGroups } = usePublishedGroupsQuery()
  const history = useHistory()

  if (loading) return <Loading />

  const goPublishProducts = () => {
    history.push('/mis-productos/nuevo')
  }

  return (
    <div className={classes.container}>
      <Link to='/' className={classes.homeLink}>
        &#60;  Volver a la pagina principal
      </Link>
      <h1 className={classes.title}>Mis publicaciones</h1>
      {
        !isEmpty(publishedGroups) ? (
          <div className={classes.productsContainer}>
            <div className={classes.listHeader}>
              <p>{publishedGroups.length} Publicaciones activas</p>
              <Button onClick={goPublishProducts} className={classes.onlyDesktop}>
                Publicá tu producto
              </Button>
            </div>
            <ProductList groups={publishedGroups} />
            <Button onClick={goPublishProducts} className={classes.onlyMobile}>
              Publicá tu producto
            </Button>
          </div>
        ) : (
          <div className={classes.noProducts}>
            <h2>Aún no realizaste ninguna publicación</h2>
            <p>Publicá tu producto ahora y llegá a miles de compradores!</p>
            <Button onClick={goPublishProducts}>
              Publicá tu producto
            </Button>
          </div>
        )
      }
    </div>
  )
}

export default MyProducts
