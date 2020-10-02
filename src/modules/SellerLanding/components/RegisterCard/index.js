import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import classes from './styles.module.scss'
import Icon from '~/src/modules/MainApp/components/Icon'
import finishedShape from '~/src/vectors/finished-card.svg'
import finishedShapeMobile from '~/src/vectors/finished-card-m.svg'

const RegisterCard = ({ registerLinkId, buttonText = 'Registrate' }) => {
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
      <Icon icon={finishedShape} className={classnames(classes.shape, classes.onlyDesktop)} />
      <Icon icon={finishedShapeMobile} className={classnames(classes.shape, classes.onlyMobile)} />
    </div>
  )
}

export default RegisterCard
