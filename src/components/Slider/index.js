import React from 'react'

import DotSelected from './DotSelected'
import DotUnSelected from './DotUnSelected'

import './Slider.scss'

const Slider = ({ currentIndex, maxLength }) => {
  const length = maxLength < 4 ? maxLength : 3

  const dotInstance = {
    DotSelected, DotUnSelected
  }

  const dots = []
  for (let i = 0; i < length; i += 1) {
    dots.push(currentIndex === i ? 'DotSelected' : 'DotUnSelected')
  }

  return (
    <div className='slider'>
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
