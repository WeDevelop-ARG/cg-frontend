import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

const Banner = ({ time }) => {
  return (
    <div className='product-detail__descriptions__banner'>
      <FontAwesomeIcon
        style={{
          height: '18.33px',
          width: '18.33px'
        }}
        icon={faClock}
        color='#EB5433'
        className='product-detail__descriptions__banner--icon'
      />
      <span className='product-detail__descriptions__banner--message'>
        Apurate! esta oferta termina en
      </span>
      <span className='product-detail__descriptions__banner--time'>
        {time}
      </span>
    </div>
  )
}

export default Banner
