import React, { useContext, useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import AuthContext from '~/src/Contexts/AuthContext/context'
import Icon from '~/src/components/Icon'
import MenuShape from '~/src/vectors/menu.svg'

import classes from './styles.module.scss'

const Mobile = ({ onSignin, onSignup, goTo }) => {
  const location = useLocation()
  const [isDropdownOpened, setIsDropdownOpened] = useState(false)
  const { status, handleLogout } = useContext(AuthContext)
  const [inQuieroVender, setInQuieroVender] = useState(false)

  useEffect(() => {
    setInQuieroVender(location.pathname.includes('quiero-vender'))
  }, [location])

  const handleDropdown = () => setIsDropdownOpened(!isDropdownOpened)

  const logout = () => {
    setIsDropdownOpened(false)
    handleLogout()
  }

  const signIn = () => {
    handleDropdown()
    onSignin()
  }

  const signUp = () => {
    handleDropdown()
    onSignup()
  }

  const goToHandler = (path) => {
    handleDropdown()
    goTo(path)
  }

  return (
    <div className={classes.container}>
      <Icon icon={MenuShape} onClick={handleDropdown} />
      {
        isDropdownOpened && (
          <div className={classes.dropdown}>
            {
              !status ? (
                <div className={classes.options}>
                  {
                    inQuieroVender ? (
                      <button id='navbar_products_link'>
                        Productos
                      </button>
                    ) : (
                      <button onClick={() => goToHandler('/quiero-vender')}>
                        Quiero vender
                      </button>
                    )
                  }
                  <button onClick={signUp}>
                    Creá tu cuenta
                  </button>
                  <button onClick={signIn}>
                    Ingresá
                  </button>
                </div>
              ) : (
                <div className={classes.options}>
                  <button onClick={() => goToHandler('/mis-productos')} className={classes.item}>Mis publicaciones</button>
                  <button onClick={logout} className={classes.item}>Salir</button>
                </div>
              )
            }
          </div>
        )
      }
    </div>
  )
}

export default Mobile
