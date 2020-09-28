import React from 'react'

import classes from './styles.module.scss'
import CloseShape from '~/src/vectors/close.svg'
import Icon from '~/src/modules/MainApp/components/Icon'

const Thumbnail = ({ src = '', onDelete, ...props }) => {
  return (
    <div {...props} className={classes.thumbnail} style={{ backgroundImage: `url(${src})` }}>
      {onDelete && <Icon onClick={onDelete} icon={CloseShape} className={classes.close} />}
    </div>
  )
}

export default Thumbnail
