import React from 'react'
import CardsGroup from '../CardsGroup'

import classes from './styles.module.scss'

const Banner = () => {
  return (
    <div className={classes.header}>
      <h1 className={classes.title}>Vendé en grande</h1>
      <h3 className={classes.subtitle}>Conocé los beneficios de Compras Grupales y empezá a vender</h3>
      <CardsGroup />
    </div>
  )
}

export default Banner
