import React, { useContext, useState } from 'react'
import AuthContext from '~/src/Contexts/AuthContext/context'
import UnregisteredItems from './UnregisteredItems'
import RegisteredItems from './RegisteredItems'
import classes from './styles.module.scss'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  const { status } = useContext(AuthContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleCloseMenu = () => setIsMenuOpen(false)

  const navItems = !status
    ? <UnregisteredItems handleCloseMenu={handleCloseMenu} />
    : <RegisteredItems handleCloseMenu={handleCloseMenu} />

  return (
    <nav className={classes.navbar}>
      <div className={classes.desktopOnly}>
        {navItems}
      </div>
      <div className={classes.mobileOnly}>
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} items={navItems} />
      </div>
    </nav>
  )
}

export default Navbar
