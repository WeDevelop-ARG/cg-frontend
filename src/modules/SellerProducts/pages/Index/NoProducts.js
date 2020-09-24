import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '~/src/modules/MainApp/components/Button/Default/Orange'

import './MyProducts.scss'

const NoProducts = () => {
  const history = useHistory()

  const goPublishProducts = () => {
    history.push('/mis-productos/nuevo')
  }

  return (
    <div className='MyProducts__empty'>
      <h2>
        Aún no realizaste ninguna publicación
      </h2>
      <p>
        Publicá tu producto ahora y llegá a miles de compradores!
      </p>
      <Button onClick={goPublishProducts}>
        Publicá tu producto
      </Button>
    </div>
  )
}

export default NoProducts
