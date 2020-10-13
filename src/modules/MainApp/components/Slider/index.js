import React from 'react'

import DotSelected from './DotSelected'
import DotUnSelected from './DotUnSelected'

import classes from './styles.module.scss'

const Slider = ({ currentIndex, maxLength }) => {
  const dotInstance = {
    DotSelected, DotUnSelected
  }

  const dots = []
  for (let i = 0; i < maxLength; i += 1) {
    dots.push(currentIndex === i ? 'DotSelected' : 'DotUnSelected')
  }

  return (
    <div className={classes.slider}>
      {
        dots.map((objectKey, index) => {
          const Dot = dotInstance[objectKey]
          return <Dot key={`dot-${index}`} />
        })
      }
    </div>
  )
}

export default Slider
