import React from 'react'
import { Link } from 'react-router-dom'
import classes from './styles.module.scss'
import Icon from '~/src/modules/MainApp/components/Icon'
import finishedShape from '~/src/vectors/finished-card.svg'
import finishedShapeMobile from '~/src/vectors/finished-card-m.svg'
import useMediaQuery from '~/src/hooks/useMediaQuery'

const BREAK_POINT = '(max-device-width: 576px)'

const RegisterCard = ({ registerLinkId, buttonText = 'Registrate' }) => {
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
        {buttonText}
      </Link>
      <Icon icon={icon} className={classes.shape} />
    </div>
  )
}

export default RegisterCard
