import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { TextTimer } from '~/src/components/Timer'

import classes from './styles.module.scss'

const Banner = ({ expiresAt }) => {
  return (
    <div className={classes.banner}>
      <FontAwesomeIcon
        style={{
          height: '18.33px',
          width: '18.33px'
        }}
        icon={faClock}
        color='#EB5433'
      />
      <span className={classes.message}>
        Apurate! esta oferta termina en
      </span>
      <span className={classes.time}>
        <TextTimer expiresAt={expiresAt} />
      </span>
    </div>
  )
}

export default Banner
