import React, { useState } from 'react'
import { Big as DiscountBadget } from '../../../components/DiscountBadget'
import { Left, Right } from '../../../components/Arrows'
import { Link } from 'react-router-dom'
import Slider from '../../../components/Slider'

import './styles.scss'

const Pictures = ({ oldPrice = 0, price = 0, photoUrls = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = photoUrls.length <= 4 ? photoUrls.length - 1 : 3

  const handleBack = () => {
    if (currentIndex <= 0) return null

    setCurrentIndex(currentIndex - 1)
  }

  const handleNext = () => {
    if (currentIndex >= maxIndex) return null

    setCurrentIndex(currentIndex + 1)
  }

  const isImageSelected = (index) => {
    const thumnailClass = 'product-detail__pictures__photos--container__img'
    const isSelectedClass = 'product-detail__pictures--selected'

    if (index === currentIndex) return `${thumnailClass} ${isSelectedClass}`

    return thumnailClass
  }

  const handleGoToIndex = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className='product-detail__pictures'>
      <DiscountBadget
        oldPrice={oldPrice}
        price={price}
        topPosition='116px'
        leftPosition='-18px'
      />
      <Link to='/' className='product-detail__pictures__home-link'>
        <span>{'<'}</span>
        <span>Volver a la página principal</span>
      </Link>
      <div
        className='product-detail__pictures__img'
        style={{ backgroundImage: `url(${photoUrls[currentIndex]})` }}
      >
        <div className='product-detail__pictures__photos__slider'>
          <Slider currentIndex={currentIndex} maxLength={photoUrls.length} />
        </div>
        <div className='product-detail__pictures__arrow-left'>
          <Left isBlack onClick={handleBack} />
        </div>
        <div className='product-detail__pictures__arrow-right'>
          <Right isBlack onClick={handleNext} />
        </div>
      </div>
      <div className='product-detail__pictures__photos--container'>
        {
          photoUrls.map((value, index) => {
            if (index > 3) return undefined // just render until four photos
            return (
              <img
                onClick={() => handleGoToIndex(index)}
                className={isImageSelected(index)}
                src={value} key={`photoUrl-${index}`}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Pictures
