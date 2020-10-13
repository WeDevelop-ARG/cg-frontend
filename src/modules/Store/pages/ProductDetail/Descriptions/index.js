import React from 'react'

import { Orange as Button } from '~/src/components/Button/Default'
import GroupProgress from '~/src/components/GroupProgress'

import Banner from '../Banner'
import Costs from '../Costs'

import { FaceBook, Instagram, Twitter } from '~/src/components/SocialMediaIcons'

import classes from './styles.module.scss'

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
    <div className={classes.container}>
      <Banner expiresAt={expiresAt} />
      <div className={classes.title}>
        <span>{title}</span>
      </div>
      <Costs price={price} oldPrice={oldPrice} />
      <div className={classes.labelLineContainer}>
        <span className={classes.labelLineLabel}>
          Marca:
        </span>
        <span className={classes.labelLineContent}>
          {brand}
        </span>
      </div>
      <div className={classes.labelLineContainer}>
        <span className={classes.labelLineLabel}>
          Color:
        </span>
        <span className={classes.labelLineContent}>
          {colors.join(', ')}
        </span>
      </div>
      <div className={classes.label}>
        Descripción:
      </div>
      <p className={classes.labelContent}>
        {description}
      </p>
      <div className={classes.button}>
        <Button onClick={() => onBuy()}>
          ¡Lo quiero!
        </Button>
      </div>
      <GroupProgress currentParticipants={currentParticipants} minParticipants={minParticipants} />
      {restOfParticipants > 0 && (
        <div className={classes.restParticipants}>
          <div>
            <span className={classes.howManyLeft}>
              {`¡Faltan ${restOfParticipants} compradores para completar el grupo!`}
            </span>
            <p className={classes.shareCTA}>
              Compartí y sumá gente para acceder más rapido a tu producto
            </p>
          </div>
          <div className={classes.socialMedia}>
            <FaceBook />
            <Instagram />
            <Twitter />
          </div>
        </div>
      )}
      <p className={classes.advertise}>
        Tu compra se hará efectiva una vez que el grupo se complete. En el caso de que esto no ocurra, te devolvemos el total de tu dinero.
      </p>
    </div>
  )
}

export default Descriptions
