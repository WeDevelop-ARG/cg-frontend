import React from 'react'

import Dot from './Dot'

import classes from './styles.module.scss'

const Slider = ({ currentIndex, maxLength }) => {
  const dotsClasses = []
  for (let i = 0; i < maxLength; i += 1) {
    dotsClasses.push(currentIndex === i ? 'dotSelected' : 'dotUnselected')
  }

  return (
    <div className={classes.slider}>
      {
        dotsClasses.map((dotClass, index) => {
          return <Dot key={`dot-${index}`} className={classes[dotClass]} />
        })
      }
    </div>
  )
}

export default Slider
