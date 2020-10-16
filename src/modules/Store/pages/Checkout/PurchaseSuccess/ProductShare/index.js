import React from 'react'
import { FaceBook, Instagram, Twitter } from '~/src/components/SocialMediaIcons'
import { BASE_SITE_URL } from '~/src/constants'
import CopyLink from '~/src/vectors/copy-link.svg'
import classes from './styles.module.scss'

const ProductShare = ({ groupId }) => {
  const productURL = `${BASE_SITE_URL}/store/product-detail/${groupId}`

  return (
    <div className={classes.share}>
      <div className={classes.shareBox}>
        <p className={classes.productUrl}>{productURL}</p>
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
