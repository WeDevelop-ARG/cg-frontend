import React from 'react'
import { useHistory } from 'react-router-dom'
import classes from './styles.module.scss'
import Icon from '../../../components/Icon'
import finishedShape from '../../../vectors/finished-card.svg'
import finishedShapeMobile from '../../../vectors/finished-card-m.svg'
import Button from '../../../components/Button'
import useMediaQuery from '../../../hooks/useMediaQuery'
import { logGAEvent } from '../../../firebase.js'

const BREAK_POINT = '(max-device-width: 576px)'

const RegisterCard = () => {
  const history = useHistory()

  const isMobile = useMediaQuery(BREAK_POINT)

  const goToRegister = () => {
    logGAEvent('seller_landing_cta', { seller_landing_version: 'A' })
    return history.push('/auth/signup')
  }

  const icon = isMobile ? finishedShapeMobile : finishedShape

  return (
    <div className={classes.card}>
      <span className={classes.text}>¿Querés formar parte de nuestra comunidad de venta?</span>
      <Button onClick={goToRegister}>Registrate</Button>
      <Icon icon={icon} className={classes.shape} />
    </div>
  )
}

export default RegisterCard
