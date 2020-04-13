import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import AuthContext from '../../Contexts/AuthContext/context'

import './Navbar.scss'

const Navbar = () => {
  const { status, handleLogout } = useContext(AuthContext)

  const history = useHistory()

  const goToSignin = () => {
    history.push('/auth/signin')
  }

  const goToSignup = () => {
    history.push('/auth/signup')
  }

  return (
    <nav className='navbar'>
      <ul className='navbar__nav-links'>
        {
          !status ? (
            <>
              <li className='navbar__nav-links--item'>
                <button type='button' name='signup' onClick={() => goToSignup()}>
                  Creá tu cuenta
                </button>
              </li>
              <li className='navbar__nav-links--item'>
                <button type='button' name='signup' onClick={() => goToSignin()}>
                  Ingresá
                </button>
              </li>
            </>
          ) : (
            <li className='navbar__nav-links--item'>
              <button type='button' name='signup' onClick={handleLogout}>
                Logout
              </button>
            </li>
          )
        }
      </ul>
    </nav>
  )
}

export default Navbar
