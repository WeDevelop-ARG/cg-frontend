import React from 'react'
import classes from './styles.module.scss'
import classnames from 'classnames'
import Icon from '~/src/modules/MainApp/components/Icon'
import groupCompleteIcon from '~/src/vectors/group-complete.svg'
import groupCompleteMobileIcon from '~/src/vectors/group-complete-m.svg'

const GroupComplete = () => {
  return (
    <div className={classes.card}>
      <span className={classes.text}>¡Grupo completo!</span>
      <Icon icon={groupCompleteIcon} className={classnames(classes.image, classes.onlyDesktop)} />
      <Icon icon={groupCompleteMobileIcon} className={classnames(classes.image, classes.onlyMobile)} />
    </div>
  )
}

export default GroupComplete
