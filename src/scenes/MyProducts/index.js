import React from 'react'
import { Redirect, Link, useHistory } from 'react-router-dom'
import usePublishedGroupsQuery from '../../hooks/usePublishedGroupsQuery'
import Button from '../../components/Button/Default/Orange'

import ProductList from './ProductList'
import EmptyProductList from './NoProducts'

const MyProducts = () => {
  const { loading, currentUser } = usePublishedGroupsQuery()

  if (loading) {
    return (
      <div>
        <h1>... Loading</h1>
      </div>
    )
  }

  if (!currentUser) return <Redirect to='/' />
  const { publishedGroups } = currentUser
  const history = useHistory()

  const goPublishProducts = () => {
    history.push('/mis-productos/nuevo')
  }

  return (
    <div className='MyProducts'>
      <Link to='/' className='MyProducts__go-home'>
        &#60;  Volver a la pagina principal
      </Link>
      <h1>Mis publicaciones</h1>
      {
        publishedGroups.length ? (
          <div className='MyProducts__data'>
            <div className='MyProducts__data--status'>
              <p>{publishedGroups.length} Publicaciones activas</p>
              <Button onClick={goPublishProducts}>
                Publicá tu producto
              </Button>
            </div>
            <ProductList groups={publishedGroups} />
          </div>
        ) : <EmptyProductList />
      }
    </div>
  )
}

export default MyProducts
