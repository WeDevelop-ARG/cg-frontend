import React from 'react'
import classes from './styles.module.scss'
import StepInfo from '../../StepInfo'

const LastPart = () => {
  return (
    <div className={classes.lastSteps}>
      <StepInfo header='VOS' title='Recibí notificaciones' className={classes.fifthStep}>
        Una vez que el grupo se haya completado, te enviamos una notificación con todos los detalles de tus ventas
      </StepInfo>
      <StepInfo header='VOS' title='Enviá tus productos' className={classes.sixthStep}>
        Realizá el envío de tus productos a los compradores
      </StepInfo>
      <StepInfo header='VOS' title='Recibí tu dinero' className={classes.seventhStep}>
        Una vez concretada la transacción, el dinero se acreditará en tu cuenta
      </StepInfo>
    </div>
  )
}

export default LastPart
