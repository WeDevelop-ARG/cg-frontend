import React, { useContext, useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import AuthContext from '~/src/Contexts/AuthContext/context'
import UserDropdown from './UserDropdown'
import classes from './styles.module.scss'

const UnregisteredItems = () => {
  const location = useLocation()
  const [inQuieroVender, setInQuieroVender] = useState(false)

  useEffect(() => {
    setInQuieroVender(location.pathname.includes('quiero-vender'))
  }, [location])

  return (
    <>
      {
        inQuieroVender ? (
          <Link id='navbar_products_link' className={classes.navItem}>
            Productos
          </Link>
        ) : (
          <Link to='/quiero-vender' className={classes.navItem}>
            Quiero vender
          </Link>
        )
      }
      <Link to='/auth/signup' className={classes.navItem}>
        Creá tu cuenta
      </Link>
      <Link to='/auth/signin' className={classes.navItem}>
        Ingresá
      </Link>
    </>
  )
}

const RegisteredItems = () => {
  return (
    <>
      <UserDropdown />
    </>
  )
}

const Navbar = () => {
  const { status } = useContext(AuthContext)

  return (
    <nav className={classes.navbar}>
      {!status
        ? <UnregisteredItems />
        : <RegisteredItems />}
    </nav>
  )
}

export default Navbar
