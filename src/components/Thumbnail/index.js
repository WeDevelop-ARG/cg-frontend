import React from 'react'

import classes from './styles.module.scss'
import CloseShape from '../../vectors/close.svg'
import Icon from '../Icon'

const Thumbnail = ({ src = '', onDelete, ...props }) => {
  return (
    <div {...props}>
      <div className={classes.thumbnail} style={{ backgroundImage: `url(${src})` }}>
        {onDelete && <Icon onClick={onDelete} icon={CloseShape} className={classes.close} />}
      </div>
    </div>
  )
}

export default Thumbnail
