import React from 'react'
import { Redirect, Link, useHistory } from 'react-router-dom'
import usePublishedGroupsQuery from '../../hooks/usePublishedGroupsQuery'
import Button from '../../components/Button/Default/Orange'

import ProductList from './ProductList'
import EmptyProductList from './NoProducts'
import MyProductContext from './myProductContext'

const MyProducts = () => {
  const { loading, currentUser, refetch } = usePublishedGroupsQuery()
  const history = useHistory()

  if (loading) {
    return (
      <div>
        <h1>... Loading</h1>
      </div>
    )
  }

  if (!currentUser) return <Redirect to='/' />
  const { publishedGroups } = currentUser

  const goPublishProducts = () => {
    history.push('/mis-productos/nuevo')
  }

  return (
    <MyProductContext.Provider
      value={{ refetchProducts: () => refetch() }}
    >
      <div className='MyProducts'>
        <Link to='/' className='MyProducts__go-home'>
        &#60;  Volver a la pagina principal
        </Link>
        <h1>Mis publicaciones</h1>
        <div className='MyProducts__List--container'>
          {
            publishedGroups.length ? (
              <>
                <div className='MyProducts__data'>
                  <div className='MyProducts__data--status'>
                    <p>{publishedGroups.length} Publicaciones activas</p>
                    <Button onClick={goPublishProducts}>
                    Publicá tu producto
                    </Button>
                  </div>
                </div>
                <ProductList groups={publishedGroups} />
              </>
            ) : <EmptyProductList />
          }
        </div>
      </div>
    </MyProductContext.Provider>
  )
}

export default MyProducts
