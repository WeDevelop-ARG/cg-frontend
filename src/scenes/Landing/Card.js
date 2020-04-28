import React from 'react'

import classes from './styles.module.scss'
import Icon from '../../components/Icon'

const Card = ({ icon = '', title = '', children = '' }) => (
  <div className={classes.card}>
    <Icon icon={icon} className={classes.cardIcon} />
    <span className={classes.cardText}>{title}</span>
    <span className={classes.cardMessage}>{children}</span>
  </div>
)

export default Card
