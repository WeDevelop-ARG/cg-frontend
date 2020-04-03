import React from 'react'
import { useHistory } from 'react-router-dom'
import Status from '../../components/Auth/Status'

import './index.scss'

const Navbar = () => {
  const history = useHistory()

  const goToSignin = () => {
    history.push('/auth/signin')
  }

  const goToSignup = () => {
    history.push('/auth/signup')
  }

  return (
    <ul className='navbar'>
      <li className='navbar__option'>
        <button type='button' name='signin' onClick={() => goToSignin()}>
          SignIn
        </button>
      </li>
      <li className='navbar__option'>
        <button type='button' name='signup' onClick={() => goToSignup()}>
          SignUp
        </button>
      </li>
      <li className='navbar__option--left'>
        <Status />
      </li>
    </ul> 
  )
}

export default Navbar
