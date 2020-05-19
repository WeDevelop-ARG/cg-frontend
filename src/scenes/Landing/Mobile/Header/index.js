import React from 'react'
import { useHistory } from 'react-router-dom'
import Icon from '../../../../components/Icon'
import Button from '../../../../components/Button/Default/Orange'
import wavesShape from '../../../../vectors/landing-waves-m.svg'
import classes from './styles.module.scss'

const schemeWhite = {
  header: '#FFFFFF',
  title: '#3561D1',
  subtitle: 'Promocioná tus productos y llegá a más gente sin tener que invertir tiempo ni pagar comisiones.',
  subtitleColor: '#1A2224',
  withButton: true
}

const schemeBlue = {
  header: '#3561D1',
  title: '#FFFFFF',
  subtitle: 'Conocé los beneficios de Compras Grupales y empezá a vender',
  subtitleColor: '#FFFFFF',
  withButton: false
}

const Header = ({ schemeColor }) => {
  const history = useHistory()
  const scheme = schemeColor ? schemeBlue : schemeWhite
  const goToSignUp = () => history.push('/auth/signup')
  return (
    <div className={classes.header} style={{ backgroundColor: scheme.header, height: scheme.withButton ? '335px' : '248px' }}>
      <h1 className={classes.title} style={{ color: scheme.title }}>Vendé en grande</h1>
      <h2 className={classes.subtitle} style={{ color: scheme.subtitleColor }}>{scheme.subtitle}</h2>
      {scheme.withButton && <Button id='seller_landing_a_header_cta' onClick={goToSignUp}>Quiero vender más</Button>}
      <Icon className={classes.waves} icon={wavesShape} style={{ top: scheme.withButton ? '258px' : '171px' }} />
    </div>
  )
}

export default Header
