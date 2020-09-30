import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '~/src/modules/MainApp/components/Button/Default/Orange'
import CardsGroup from '../CardsGroup'

import classes from './styles.module.scss'

const Banner = () => {
  const history = useHistory()
  const goToSignUp = () => history.push('/auth/signup')

  return (
    <div className={classes.header}>
      <h1 className={classes.title}>Vendé en grande</h1>
      <h3 className={classes.subtitle}>Promocioná tus productos y llegá a más gente sin tener que invertir tiempo ni pagar comisiones.</h3>
      <Button id='seller_landing_a_header_cta' onClick={goToSignUp}>Quiero vender más</Button>
      <CardsGroup />
    </div>
  )
}

export default Banner
