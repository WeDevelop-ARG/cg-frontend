import React, { useContext, useState, useRef, useEffect } from 'react'
import { useHistory, useLocation, Link } from 'react-router-dom'
import AuthContext from '../../Contexts/AuthContext/context'
import AngleUp from '../../vectors/angle-up.svg'
import AngleDown from '../../vectors/angle-down.svg'
import useMediaQuery from '../../hooks/useMediaQuery'
import Mobile from './Mobile'
import classes from './styles.module.scss'

const BREAK_POINT = '(max-device-width: 768px)'

const Navbar = () => {
  const location = useLocation()
  const isMobile = useMediaQuery(BREAK_POINT)
  const [isDropdownOpened, setIsDropdownOpened] = useState(false)
  const [inQuieroVender, setInQuieroVender] = useState(false)
  const { status, handleLogout, currentUser } = useContext(AuthContext)

  useEffect(() => {
    setInQuieroVender(location.pathname.includes('quiero-vender'))
  }, [location])

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

  const goToSignin = () => history.push('/auth/signin')

  const goToSignup = () => history.push('/auth/signup')

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
              {
                inQuieroVender ? (
                  <li className={classes.navbarLinksItem}>
                    <Link id='navbar_products_link'>
                      Productos
                    </Link>
                  </li>
                ) : (
                  <li className={classes.navbarLinksItem}>
                    <Link to='/quiero-vender'>
                      Quiero vender
                    </Link>
                  </li>
                )
              }
              <li className={classes.navbarLinksItem}>
                <Link to='/auth/signup'>
                  Creá tu cuenta
                </Link>
              </li>
              <li className={classes.navbarLinksItem}>
                <Link to='/auth/signin'>
                  Ingresá
                </Link>
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
                    <button onClick={() => goTo('/mis-productos')} className={classes.item}>Mis publicaciones</button>
                    <button onClick={logout} className={classes.item}>Salir</button>
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
