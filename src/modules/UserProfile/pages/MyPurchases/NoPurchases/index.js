import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import Button from '~/src/modules/MainApp/components/Button/Default/Orange'
import Subtitle from '~/src/modules/MainApp/components/Subtitle'

import classes from './styles.module.scss'

const NoPurchases = () => {
  const history = useHistory()
  const goHome = useCallback(() => { history.push('/') }, [])

  return (
    <div className={classes.empty}>
      <Subtitle>Aún no realizaste ninguna compra</Subtitle>
      <div className={classes.middleText}>Encontrá lo que más te guste en nuestra página de inicio</div>
      <Button onClick={goHome}>Explorar</Button>
    </div>
  )
}

export default NoPurchases
