import React from 'react'
import classes from './styles.module.scss'
import Icon from '../../../components/Icon'
import groupCompleteIcon from '../../../vectors/group-complete.svg'
import groupCompleteMobileIcon from '../../../vectors/group-complete-m.svg'
import useMediaQuery from '../../../hooks/useMediaQuery'

const BREAK_POINT = '(max-device-width: 576px)'

const GroupComplete = () => {
  const isMobile = useMediaQuery(BREAK_POINT)

  const icon = isMobile ? groupCompleteMobileIcon : groupCompleteIcon
  return (
    <div className={classes.card}>
      <span className={classes.text}>¡Grupo completo!</span>
      <Icon className={classes.image} icon={icon} />
    </div>
  )
}

export default GroupComplete
