import React from 'react'

import classes from './styles.module.scss'
import Icon from '~/src/modules/MainApp/components/Icon'

const Card = ({ icon = '', title = '', message = '' }) => (
  <div className={classes.card}>
    <Icon icon={icon} className={classes.icon} />
    <span className={classes.title}>{title}</span>
    <span className={classes.message}>{message}</span>
  </div>
)

export default Card
