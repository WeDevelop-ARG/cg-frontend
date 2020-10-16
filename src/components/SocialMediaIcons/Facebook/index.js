import React from 'react'
import { FacebookShareButton } from 'react-share'
import FacebookVector from '../../../vectors/facebook-f.svg'

import '../SocialMediaIcons.scss'

const Facebook = ({ url, title = 'Mira esta oferta y sumate al grupo!' }) => {
  return (
    <FacebookShareButton
      url={url || window.location.href}
      quote={title}
      className='SocialMediaIcons--container'
    >
      <img src={FacebookVector} alt='Facebook icon' />
    </FacebookShareButton>
  )
}

export default Facebook
