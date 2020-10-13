import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '~/src/Contexts/AuthContext/context'
import UserDropdown from './UserDropdown'
import classes from './styles.module.scss'

const RegisteredItems = ({ handleCloseMenu }) => {
  const { handleLogout } = useContext(AuthContext)

  return (
    <>
      <div className={classes.desktopOnly}>
        <UserDropdown />
      </div>
      <div className={classes.mobileOnly}>
        <Link to='/mis-productos' onClick={handleCloseMenu} className={classes.navItem}>
          Mis Productos
        </Link>
        <button onClick={handleLogout} className={classes.navItem}>Salir</button>
      </div>
    </>
  )
}

export default RegisteredItems
