import React from 'react'
import { useHistory } from 'react-router-dom'
import classes from './styles.module.scss'
import Icon from '../../../components/Icon'
import finishedShape from '../../../vectors/finished-card.svg'
import Button from '../../../components/Button'

const RegisterCard = () => {
  const history = useHistory()

  const goToRegister = () => {
    return history.push('/auth/signup')
  }

  return (
    <div className={classes.card}>
      <span className={classes.text}>¿Querés formar parte de nuestra comunidad de venta?</span>
      <Button onClick={goToRegister}>Registrate</Button>
      <Icon icon={finishedShape} className={classes.shape} />
    </div>
  )
}

export default RegisterCard
