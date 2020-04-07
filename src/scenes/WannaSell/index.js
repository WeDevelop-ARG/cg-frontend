import React from 'react'
import { Link } from 'react-router-dom'

const WannaSell = () => {
  // /my-products
  return (
    <div>
      <h1>Esta será la landing</h1>
      <Link to='/auth/signup?redirectTo=my-products'>
        <button type='button'>Registrate</button>
      </Link>
    </div>
  )
}

export default WannaSell
