import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import AuthContext from '~/src/Contexts/AuthContext/context'
import Dropdown from 'react-bootstrap/Dropdown'
import AngleUp from '~/src/vectors/angle-up.svg'
import AngleDown from '~/src/vectors/angle-down.svg'
import classes from './styles.module.scss'

const UserDropdown = () => {
  const { currentUser, handleLogout } = useContext(AuthContext)
  const history = useHistory()
  const [show, setShow] = useState(false)

  return (
    <Dropdown show={show} onToggle={show => setShow(show)} className={classes.dropdown}>
      <Dropdown.Toggle className={classes.toggle}>
        {currentUser?.name || 'Usuario'}
        <img
          className={classes.navbarLinksArrow}
          src={show ? AngleUp : AngleDown}
          alt=''
        />
      </Dropdown.Toggle>
      <Dropdown.Menu className={classes.menu}>
        <Dropdown.Item className={classes.item} onClick={() => history.push('/mis-productos')}>Mis productos</Dropdown.Item>
        <Dropdown.Item className={classes.item} onClick={handleLogout}>Salir</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default UserDropdown
