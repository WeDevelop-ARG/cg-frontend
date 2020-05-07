import React, { useContext, useState, useRef, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import AuthContext from '../../Contexts/AuthContext/context'
import AngleUp from '../../vectors/angle-up.svg'
import AngleDown from '../../vectors/angle-down.svg'
import useMediaQuery from '../../hooks/useMediaQuery'
import Mobile from './Mobile'
import classes from './styles.module.scss'

const BREAK_POINT = '(max-device-width: 576px)'

const Navbar = () => {
  const isMobile = useMediaQuery(BREAK_POINT)
  const [isDropdownOpened, setIsDropdownOpened] = useState(false)
  const { status, handleLogout, currentUser } = useContext(AuthContext)

  const dropdownRef = useRef(null)
  const dropdownButtonRef = useRef(null)

  const verifyClick = (e) => {
    if (dropdownRef && dropdownButtonRef) {
      if (!dropdownRef.current || !dropdownButtonRef.current) {
        setIsDropdownOpened(false)
      } else if (!dropdownRef.current.contains(e.target) && !dropdownButtonRef.current.contains(e.target)) {
        setIsDropdownOpened(false)
      }
    }
  }

  useEffect(() => {
    document.addEventListener('click', verifyClick, false)

    return () => {
      document.removeEventListener('click', verifyClick, false)
    }
  }, [])

  const history = useHistory()

  const logout = () => {
    setIsDropdownOpened(false)
    handleLogout()
  }

  const goToSignin = () => {
    history.push('/auth/signin')
  }

  const goToSignup = () => {
    history.push('/auth/signup')
  }

  const goTo = (path) => {
    setIsDropdownOpened(false)
    history.push(path)
  }

  if (isMobile) return <Mobile onSignin={goToSignin} onSignup={goToSignup} goTo={goTo} />

  return (
    <nav className={classes.navbar}>
      <ul className={classes.navbarLinks}>
        {
          !status ? (
            <>
              <li className={classes.navbarLinksItem}>
                <Link to='/quiero-vender'>
                  <button type='button'>
                    Quiero vender
                  </button>
                </Link>
              </li>
              <li className={classes.navbarLinksItem}>
                <button type='button' name='signup' onClick={() => goToSignup()}>
                  Creá tu cuenta
                </button>
              </li>
              <li className={classes.navbarLinksItem}>
                <button type='button' name='signup' onClick={() => goToSignin()}>
                  Ingresá
                </button>
              </li>
            </>
          ) : (
            <li className={classes.navbarLinksItem}>
              <button
                type='button'
                onClick={() => setIsDropdownOpened(!isDropdownOpened)}
                ref={dropdownButtonRef}
              >
                {currentUser && (currentUser.name || currentUser.email)}
                <img
                  className={classes.navbarLinksArrow}
                  src={isDropdownOpened ? AngleUp : AngleDown}
                  alt=''
                />
              </button>
              {
                isDropdownOpened && (
                  <div className={classes.dropdown} ref={dropdownRef}>
                    {/* Hide mis-compras navbar item
                      <span onClick={() => goTo('/mis-compras')} className='navbar__dropdown--item'>Mis compras</span>
                    */}
                    <span onClick={() => goTo('/mis-productos')} className={classes.item}>Mis publicaciones</span>
                    <span onClick={logout} className={classes.item}>Salir</span>
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
