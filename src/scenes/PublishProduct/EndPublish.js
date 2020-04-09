import React from 'react'
import { useHistory } from 'react-router-dom'

const EndPublish = (props) => {
  const history = useHistory()

  const goToMyProducts = () => {
    history.push('/mis-productos')
  }

  return (
    <div className='Publish__End'>
      <h1>Producto cargado con éxito!</h1>
      <button onClick={goToMyProducts}>Ir a mis productos</button>
      <button onClick={() => props.reset()}>Cargar otro</button>
    </div>
  )
}

export default EndPublish
