import React from 'react'
import classes from './styles.module.scss'

const FifthStep = (props) => (
  <div {...props}>
    <div className={classes.fifthStep}>
      <span className={classes.you}>VOS</span>
      <span className={classes.notifications}>Recibí notificaciones</span>
      <span className={classes.groupComplete}>
        Una vez que el grupo se haya completado, te enviamos una notificación con todos los detalles de tus ventas
      </span>
    </div>
  </div>
)

export default FifthStep
