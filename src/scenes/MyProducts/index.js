import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import usePublishedGroupsQuery from '../../hooks/usePublishedGroupsQuery'

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
      <h1>Publicaciones</h1>
      <Link to='/mis-productos/nuevo'>
        <button>Publicar más</button>
      </Link>
      <hr />
      {
        !!publishedGroups.length && (
          <ul>
            {publishedGroups.map(({ id, product: { name } }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        )
      }
    </div>
  )
}

export default MyProducts
