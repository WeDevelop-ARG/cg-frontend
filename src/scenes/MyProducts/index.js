import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import usePublishedGroupsQuery from '../../hooks/usePublishedGroupsQuery'

import ProductListItem from './ProductItem'
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

  return (
    <div className='MyProducts'>
      <Link to='/' className='MyProducts__go-home'>
        &#60;  Volver a la pagina principal
      </Link>
      <h1>Mis publicaciones</h1>
      {
        publishedGroups.length ? (
          <ul>
            {publishedGroups.map(group => (
              <li key={group.id}>
                <ProductListItem group={group} />
              </li>
            ))}
          </ul>
        )
          : <EmptyProductList />
      }
    </div>
  )
}

export default MyProducts
