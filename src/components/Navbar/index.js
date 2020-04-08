import React from 'react'
import { useHistory } from 'react-router-dom'
import Status from '../../components/Auth/Status'

import './Navbar.scss'

const Navbar = () => {
  const history = useHistory()

  const goToSignin = () => {
    history.push('/auth/signin')
  }

  const goToSignup = () => {
    history.push('/auth/signup')
  }

  return (
    <nav className='navbar'>
      <Status />
      <ul className='navbar__nav-links'>
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
      </ul>
    </nav>
  )
}

export default Navbar
