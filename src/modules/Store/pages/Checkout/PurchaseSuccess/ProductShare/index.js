
import React, { useState } from 'react'
import { BASE_SITE_URL } from '~/src/constants'
import { FaceBook, Instagram, Twitter, Whatsapp } from '~/src/components/SocialMediaIcons'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

import CopyLink from '~/src/vectors/copy-link.svg'
import classes from './styles.module.scss'

const ProductShare = ({ groupId }) => {
  const [copied, setCopied] = useState(false)
  const productURL = `${BASE_SITE_URL}/store/product-detail/${groupId}`

  return (
    <div className={classes.share}>
      <div className={classes.shareBox}>
        <p className={classes.productUrl}>{productURL}</p>
        <OverlayTrigger
          placement='right'
          delay={{ show: 100, hide: 400 }}
          overlay={renderTooltip({ isLinkCopied: copied })}
        >
          {({ ref, ...triggerHandler }) => (
            <button
              {...triggerHandler}
              className={classes.trasparentButton}
              onClick={() => navigator.clipboard.writeText(productURL) && setCopied(true)}
            >
              <img src={CopyLink} alt='' ref={ref} />
            </button>
          )}
        </OverlayTrigger>
      </div>
      <div className={classes.socialMedia}>
        <FaceBook url={productURL} />
        <Instagram />
        <Twitter url={productURL} />
        <Whatsapp url={productURL} />
      </div>
    </div>
  )
}

const renderTooltip = ({ isLinkCopied }) => (
  <Tooltip className={classes.tooltip}>
    {isLinkCopied ? 'Link copied to clipboard!' : 'Click to copy link to clipboard'}
  </Tooltip>
)

export default ProductShare
