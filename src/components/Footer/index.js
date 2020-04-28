import React from 'react'
import { Link } from 'react-router-dom'

import classes from './styles.module.scss'
import facebook from '../../vectors/facebook-black.svg'
import instagram from '../../vectors/instagram-black.svg'
import twitter from '../../vectors/twitter-black.svg'

const Footer = () => {
  return (
    <div className={classes.container}>
      <div>
        <span className={classes.powered}>Powered by WeDevelop</span>
      </div>
      <div>
        <h1>Contacto</h1>
        <p>info@wedevelop.me</p>
      </div>
      <div>
        <h1>Ayuda</h1>
        <Link to='/' className={classes.link}>Preguntas frecuentes</Link>
        <p />
        <Link to='/' className={classes.link}>Contacto</Link>
      </div>
      <div>
        <h1>Legales</h1>
        <Link to='/' className={classes.link}>Términos y condiciones</Link>
        <p />
        <Link to='/' className={classes.link}>Política de privacidad</Link>
      </div>
      <div>
        <h1>Seguinos</h1>
        <img src={facebook} alt='F' style={{ height: '24px' }} />
        <img src={instagram} alt='I' style={{ height: '24px' }} />
        <img src={twitter} alt='T' style={{ height: '24px' }} />
      </div>
    </div>
  )
}

export default Footer
