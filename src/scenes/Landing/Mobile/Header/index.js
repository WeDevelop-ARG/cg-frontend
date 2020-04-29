import React from 'react'
import Icon from '../../../../components/Icon'
import wavesShape from '../../../../vectors/landing-waves-m.svg'
import classes from './styles.module.scss'

const Header = () => {
  return (
    <div className={classes.header}>
      <h1 className={classes.title}>Vendé en grande</h1>
      <h2 className={classes.subtitle} />
      <Icon className={classes.waves} icon={wavesShape} />
    </div>
  )
}

export default Header
