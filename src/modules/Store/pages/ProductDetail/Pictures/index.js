import React, { useCallback, useState } from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import { Left, Right } from '~/src/modules/MainApp/components/Arrows'
import Slider from '~/src/modules/MainApp/components/Slider'
import { Big as DiscountBadget } from '~/src/components/DiscountBadget'

import classes from './styles.module.scss'

const Pictures = ({ oldPrice = 0, price = 0, photoUrls = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = photoUrls.length ? photoUrls.length - 1 : 0

  const handleBack = useCallback(() => {
    if (currentIndex <= 0) return null

    setCurrentIndex(currentIndex - 1)
  }, [currentIndex])

  const handleNext = useCallback(() => {
    if (currentIndex >= maxIndex) return null

    setCurrentIndex(currentIndex + 1)
  }, [currentIndex, maxIndex])

  const isImageSelected = (index) => {
    if (index === currentIndex) return classnames(classes.thumbnail, classes.selected)

    return classes.thumbnail
  }

  const handleGoToIndex = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className={classes.container}>
      <DiscountBadget
        oldPrice={oldPrice}
        price={price}
        topPosition='116px'
        leftPosition='-18px'
      />
      <Link to='/' className={classes.homeLink}>
        <span>{'<'}</span>
        <span>Volver a la página principal</span>
      </Link>
      <div className={classes.photoSlider}>
        <img
          src={photoUrls[currentIndex]}
          className={classes.img}
        />
        <div className={classes.photoSliderDot}>
          <Slider currentIndex={currentIndex} maxLength={photoUrls.length} />
        </div>
        <div className={classes.arrowLeft}>
          <Left color='yellow' onClick={handleBack} />
        </div>
        <div className={classes.arrowRight}>
          <Right color='yellow' onClick={handleNext} />
        </div>
      </div>
      <div className={classes.thumbnailContainer}>
        {photoUrls.map((value, index) => {
          return (
            <img
              onClick={() => handleGoToIndex(index)}
              className={isImageSelected(index)}
              src={value}
              key={`photoUrl-${index}`}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Pictures
