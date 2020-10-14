import React from 'react'
import { FaceBook, Instagram, Twitter } from '~/src/components/SocialMediaIcons'

import CopyLink from '~/src/vectors/copy-link.svg'
import classes from './styles.module.scss'

const ProductShare = ({ productName }) => {
  return (
    <div className={classes.share}>
      <div className={classes.shareBox}>
        <p className={classes.productUrl}>http://comprasgrupales.com/{(productName).replace(/ /g, '-').toLowerCase()}</p>
        <img src={CopyLink} alt='' />
      </div>
      <div className={classes.socialMedia}>
        <FaceBook />
        <Instagram />
        <Twitter />
      </div>
    </div>
  )
}

export default ProductShare
