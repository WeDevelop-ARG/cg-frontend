import React from 'react'

import { Orange as Button } from '../../../components/Button/Default'
import GroupProgress from '../../../components/GroupProgress'

import Banner from './Banner'
import Costs from './Costs'

import { FaceBook, Instagram, Twitter } from '../../../components/SocialMediaIcons'

import './styles.scss'

const Descriptions = ({
  title = '',
  oldPrice = 0,
  price = 0,
  brand = '',
  colors = [],
  description = '',
  currentParticipants = 0,
  minParticipants = 0,
  expiresAt,
  onBuy
}) => {
  const restOfParticipants = minParticipants - currentParticipants

  return (
    <div className='product-detail__descriptions'>
      <Banner expiresAt={expiresAt} />
      <div className='product-detail__descriptions__title'>
        <span>{title}</span>
      </div>
      <Costs price={price} oldPrice={oldPrice} />
      <div className='product-detail__descriptions__label-line'>
        <span className='product-detail__descriptions__label-line--label'>
          Marca:
        </span>
        <span className='product-detail__descriptions__label-line--title'>
          {brand}
        </span>
      </div>
      <div className='product-detail__descriptions__label-line'>
        <span className='product-detail__descriptions__label-line--label'>
          Color:
        </span>
        <span className='product-detail__descriptions__label-line--title'>
          {colors.join(', ')}
        </span>
      </div>
      <div className='product-detail__descriptions__label'>
        Descripción:
      </div>
      <p className='product-detail__descriptions__label--title'>
        {description}
      </p>
      <Button onClick={() => onBuy()}>
        ¡Lo quiero!
      </Button>
      <GroupProgress currentParticipants={currentParticipants} minParticipants={minParticipants} />
      {restOfParticipants > 0 && (
        <div className='product-detail__descriptions__rest-participants'>
          <div>
            <span className='product-detail__descriptions__rest-participants--rest'>
              {`¡Faltan ${restOfParticipants} compradores para completar el grupo!`}
            </span>
            <p>
              Compartí y sumá gente para acceder más rapido a tu producto
            </p>
          </div>
          <div className='product-detail__descriptions__rest-participants--socialmedia'>
            <FaceBook />
            <Instagram />
            <Twitter />
          </div>
        </div>
      )}
      <p className='product-detail__descriptions__advertise'>
        Tu compra se hará efectiva una vez que el grupo se complete. En el caso de que esto no ocurra, te devolvemos el total de tu dinero.
      </p>
    </div>
  )
}

export default Descriptions
