import React, { useEffect } from 'react'
import disableScroll from 'disable-scroll'
import Dropdown from 'react-bootstrap/Dropdown'
import Icon from '~/src/components/Icon'
import MenuShape from '~/src/vectors/menu.svg'
import classes from './styles.module.scss'

const UserDropdown = ({ isMenuOpen, setIsMenuOpen, items }) => {
  useEffect(() => {
    if (isMenuOpen) disableScroll.on()
    else disableScroll.off()
  }, [isMenuOpen])

  return (
    <Dropdown show={isMenuOpen} onToggle={show => setIsMenuOpen(show)} className={classes.dropdown}>
      <Dropdown.Toggle className={classes.toggle}>
        <Icon icon={MenuShape} />
      </Dropdown.Toggle>
      <Dropdown.Menu className={classes.menu}>
        {items}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default UserDropdown
