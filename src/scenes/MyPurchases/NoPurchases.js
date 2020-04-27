import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../../components/Button/Default/Orange'

import classes from './styles.module.scss'

const NoPurchases = () => {
  const history = useHistory()

  const goHome = () => {
    history.push('/')
  }

  return (
    <div className={classes.empty}>
      <h2>
        Aún no realizaste ninguna compra
      </h2>
      <p>
        Encontrá lo que más te guste en nuestra página de inicio
      </p>
      <Button onClick={goHome}>
        Explorar
      </Button>
    </div>
  )
}

export default NoPurchases
