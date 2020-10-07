import React from 'react'

import MoreBtn from '~/src/vectors/more-vertical.svg'
import ShareBtn from '~/src/vectors/share.svg'

import classes from './styles.module.scss'

const PurchaseOptions = () => {
  return (
    <div className={classes.more}>
      <img src={ShareBtn} alt='share' />
      <img src={MoreBtn} alt='moreOptions' />
    </div>
  )
}

export default PurchaseOptions
