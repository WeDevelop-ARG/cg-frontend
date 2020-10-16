import React from 'react'
import { WhatsappShareButton } from 'react-share'
import WhatsappVector from '~/src/vectors/whatsapp.svg'

import '../SocialMediaIcons.scss'

const Whatsapp = ({ url, title = 'Mira esta oferta y sumate al grupo!' }) => {
  return (
    <WhatsappShareButton
      url={url || window.location.href}
      title={title}
      separator={'\n'}
      className='SocialMediaIcons--container'
    >
      <img src={WhatsappVector} alt='Whatsapp icon' />
    </WhatsappShareButton>
  )
}

export default Whatsapp
