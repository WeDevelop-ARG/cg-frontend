import React from 'react'
import banner from '../../assets/img/Banner-homepage.png'

import './styles.scss'

const HomeBanner = () => {
  return (
    <div className='home-banner'>
      <img src={banner} alt='home-page banner' />
    </div>
  )
}

export default HomeBanner
