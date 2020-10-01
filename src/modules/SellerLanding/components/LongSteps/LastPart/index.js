import React from 'react'
import classes from './styles.module.scss'
import FifthStep from './FifthStep'
import SixthStep from './SixthStep'
import SeventhStep from './SeventhStep'

const LastPart = () => {
  return (
    <div className={classes.lastSteps}>
      <FifthStep className={classes.fifthStep} />
      <SixthStep className={classes.sixthStep} />
      <SeventhStep className={classes.seventhStep} />
    </div>
  )
}

export default LastPart
