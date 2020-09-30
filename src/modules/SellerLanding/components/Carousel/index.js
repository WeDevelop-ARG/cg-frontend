import React, { useState } from 'react'
import classnames from 'classnames'
import classes from './styles.module.scss'
import Slider from './Slider'
import SwipeableViews from 'react-swipeable-views'

const Carousel = ({ items, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const changeIndex = (nextIndex) => {
    if (Math.floor(nextIndex) !== currentIndex) setCurrentIndex(nextIndex)
  }

  return (
    <div className={classnames(classes.carousel, className)}>
      <SwipeableViews
        onSwitching={changeIndex}
        style={{
          width: '100%'
        }}
      >
        {items}
      </SwipeableViews>
      <Slider currentIndex={currentIndex} maxLength={3} />
    </div>
  )
}

export default Carousel
