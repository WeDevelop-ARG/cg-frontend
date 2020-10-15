import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import classes from './styles.module.scss'

const UnregisteredItems = ({ handleCloseMenu }) => {
  const location = useLocation()
  const [inQuieroVender, setInQuieroVender] = useState(false)

  useEffect(() => {
    setInQuieroVender(location.pathname.includes('quiero-vender'))
  }, [location])

  return (
    <>
      {
        inQuieroVender ? (
          <Link id='navbar_products_link' onClick={handleCloseMenu} className={classes.navItem}>
            Productos
          </Link>
        ) : (
          <Link to='/quiero-vender' onClick={handleCloseMenu} className={classes.navItem}>
            Quiero vender
          </Link>
        )
      }
      <Link to='/auth/registro-comprador' onClick={handleCloseMenu} className={classes.navItem}>
        Creá tu cuenta
      </Link>
      <Link to='/auth/ingresar' onClick={handleCloseMenu} className={classes.navItem}>
        Ingresá
      </Link>
    </>
  )
}

export default UnregisteredItems
