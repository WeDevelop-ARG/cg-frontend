import React from 'react'
import { TwitterShareButton } from 'react-share'
import TwitterIcon from '../../../vectors/twitter.svg'

import '../SocialMediaIcons.scss'

const Twitter = ({ url, title = 'Mira esta oferta y sumate al grupo!' }) => {
  return (
    <TwitterShareButton
      url={url || window.location.href}
      title={title}
      className='SocialMediaIcons--container'
    >
      <img src={TwitterIcon} alt='Twitter icon' />
    </TwitterShareButton>
  )
}

export default Twitter
