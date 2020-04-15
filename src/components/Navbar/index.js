import React, { useContext, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import AuthContext from '../../Contexts/AuthContext/context'
import AngleUp from '../../vectors/angle-up.svg'
import AngleDown from '../../vectors/angle-down.svg'

import './Navbar.scss'

const Navbar = () => {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false)
  const { status, handleLogout, currentUser } = useContext(AuthContext)

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
        <li className='navbar__nav-links--item'>
          <Link to='/quiero-vender'>
            <button type='button'>
              Quiero vender
            </button>
          </Link>
        </li>
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
              <button
                type='button'
                onClick={() => setIsDropdownOpened(!isDropdownOpened)}
              >
                {currentUser && currentUser.name}
                <img
                  className='navbar__nav-links--item--arrow'
                  src={isDropdownOpened ? AngleUp : AngleDown}
                  alt=''
                />
              </button>
              {
                isDropdownOpened && (
                  <div className='navbar__dropdown'>
                    <span className='navbar__dropdown--item'>Mis compras</span>
                    <Link to='/mis-productos' className='navbar__dropdown--item'>
                      <span>Mis publicaciones</span>
                    </Link>
                    <span className='navbar__dropdown--item' onClick={handleLogout}>Salir</span>
                  </div>
                )
              }
            </li>
          )
        }
      </ul>
    </nav>
  )
}

export default Navbar
