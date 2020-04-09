import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../Contexts/AuthContext/context'

const WannaSell = () => {
  const { status: isLogged } = useContext(AuthContext)
  return (
    <div>
      <h1>Esta será la landing</h1>
      {
        !isLogged && (
          <Link to='/auth/signup?redirectTo=/mis-productos'>
            <button type='button'>Registrate</button>
          </Link>
        )
      }
    </div>
  )
}

export default WannaSell
