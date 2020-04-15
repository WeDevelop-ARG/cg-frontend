import React from 'react'
import InstagramIcon from '../../../vectors/instagram.svg'

import '../SocialMediaIcons.scss'

const Instagram = () => {
  return (
    <div className='SocialMediaIcons--container'>
      <img src={InstagramIcon} alt='Instagram icon' />
    </div>
  )
}

export default Instagram
