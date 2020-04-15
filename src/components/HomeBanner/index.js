import React from 'react'

import './styles.scss'
import group8 from '../../assets/img/Group-8.png'
import group114 from '../../assets/img/Group-114.png'
import group116 from '../../assets/img/Group-116.png'
import group111 from '../../assets/img/Group-111.png'
import group from '../../assets/img/Group.svg'

const HomeBanner = () => {
  return (
    <div className='home-banner'>
      <div className='home-banner__top'>
        <h1>¡Hay Equipo!</h1>
        <h2>¿Como funciona?</h2>
      </div>
      <div className='home-banner__bottom'>
        <div className='home-banner__bottom--item'>
          <img src={group8} style={{ height: '68px' }} />
          <p>Elejí el producto que más te guste</p>
        </div>
        <div className='home-banner__bottom--item'>
          <img src={group114} style={{ height: '64px' }} />
          <p>Sumate al grupo de compra</p>
        </div>
        <div className='home-banner__bottom--item'>
          <img src={group116} style={{ height: '85px' }} />
          <p>Compartí y sumá más compradores para completar el grupo y obtener el descuento</p>
        </div>
        <div className='home-banner__bottom--item'>
          <img src={group111} style={{ height: '50px' }} />
          <p>Una vez completo, tu compra se hace efectiva y recibís el producto en tu casa</p>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
