import React from 'react'
import { Link } from 'react-router-dom'
import classes from './styles.module.scss'
import Icon from '../../../components/Icon'
import finishedShape from '../../../vectors/finished-card.svg'
import finishedShapeMobile from '../../../vectors/finished-card-m.svg'
import useMediaQuery from '../../../hooks/useMediaQuery'

const BREAK_POINT = '(max-device-width: 576px)'

const RegisterCard = ({ registerLinkId }) => {
  const isMobile = useMediaQuery(BREAK_POINT)

  const icon = isMobile ? finishedShapeMobile : finishedShape

  return (
    <div className={classes.card}>
      <span className={classes.text}>¿Querés formar parte de nuestra comunidad de venta?</span>
      <Link
        id={registerLinkId}
        to='/auth/signup'
        className={classes.link}
      >
        Registrate
      </Link>
      <Icon icon={icon} className={classes.shape} />
    </div>
  )
}

export default RegisterCard
