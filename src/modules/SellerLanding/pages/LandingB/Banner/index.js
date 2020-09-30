import React from 'react'
import Icon from '~/src/modules/MainApp/components/Icon'

import classes from './styles.module.scss'
import cart from '~/src/assets/img/LandingV2/fast-cart.svg'
import coin from '~/src/assets/img/LandingV2/coin.svg'
import smallPeople from '~/src/assets/img/LandingV2/small-people.svg'
import LandingWaves from '~/src/assets/img/LandingV2/background.svg'

const Banner = () => {
  return (
    <div className={classes.top}>
      <h1>Unite a nosotros</h1>
      <h2>Conocé los beneficios de Compras Grupales</h2>
      <h2> y empezá a vender</h2>
      <div className={classes.boxes}>
        <div className={classes.box}>
          <img src={cart} style={{ height: '44px' }} />
          <h1>Rapidez</h1>
          <p>Vendé tu stock de productos rápidamente, sin tener que invertir tiempo en captar clientes individuales</p>
        </div>
        <div className={classes.box}>
          <img src={coin} style={{ height: '44px' }} />
          <h1>Libertad de venta</h1>
          <p>El precio y el margen de ganancia dependen de vos, como así también las unidades a vender</p>
        </div>
        <div className={classes.box}>
          <img src={smallPeople} style={{ height: '45px' }} />
          <h1>Ganan todos</h1>
          <p>A partir de la venta mayorista aumentás visibilidad, tus productos se difunden en redes sociales y llegás a más gente</p>
        </div>
      </div>
      <Icon src={LandingWaves} className={classes.waves} />
    </div>
  )
}

export default Banner
