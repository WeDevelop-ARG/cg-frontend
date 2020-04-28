import React from 'react'
import classes from './styles.module.scss'
import Icon from '../../../components/Icon'
import groupCompleteIcon from '../../../vectors/group-complete.svg'

const GroupComplete = () => (
  <div className={classes.card}>
    <span className={classes.text}>¡Grupo completo!</span>
    <Icon className={classes.image} icon={groupCompleteIcon} />
  </div>
)

export default GroupComplete
