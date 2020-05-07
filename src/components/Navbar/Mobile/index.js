import React, { useContext, useState } from 'react'
import AuthContext from '../../../Contexts/AuthContext/context'
import Icon from '../../Icon'
import MenuShape from '../../../vectors/menu.svg'

import classes from './styles.module.scss'

const Mobile = ({ onSignin, onSignup, goTo }) => {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false)
  const { status, handleLogout } = useContext(AuthContext)

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
                  <span onClick={() => goToHandler('/quiero-vender')}>
                    Quiero vender
                  </span>
                  <span onClick={signUp}>
                    Creá tu cuenta
                  </span>
                  <span onClick={signIn}>
                    Ingresá
                  </span>
                </div>
              ) : (
                <div className={classes.options}>
                  <span onClick={() => goToHandler('/mis-productos')} className={classes.item}>Mis publicaciones</span>
                  <span onClick={logout} className={classes.item}>Salir</span>
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
