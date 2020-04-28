import React from 'react'
import { Form, Formik } from 'formik'
import Input from '../../components/Input'
import Button from '../../components/Button'

import classes from './styles.module.scss'
import cart from '../../assets/img/LandingV2/fast-cart.svg'
import coin from '../../assets/img/LandingV2/coin.svg'
import smallPeople from '../../assets/img/LandingV2/small-people.svg'
import step1 from '../../assets/img/LandingV2/step1.svg'
import step2 from '../../assets/img/LandingV2/step2.svg'
import step3 from '../../assets/img/LandingV2/step3.svg'

const LandingV2 = () => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <h1>Unite a nosotros</h1>
        <h2>Conocé los beneficios de Compras Grupales</h2>
        <h2> y empezá a vender</h2>
        <div className={classes.boxes}>
          <div className={classes.box}>
            <img src={cart} style={{ height: '36px' }} />
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
      </div>

      <div className={classes.content}>
        <h1>¿Cómo funciona?</h1>
        <div className={classes.howTo}>
          <div className={classes.step}>
            <div className={classes.stepInfo}>
              <h2>Registrate</h2>
              <p>Ingresá todos tus datos en el sistema y seguí paso a paso las indicaciones para comenzar </p>
            </div>
            <img src={step1} alt='Paso 1' style={{ height: '308px' }} />
          </div>

          <svg viewBox='-150 0 1200 180' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path opacity='0.3' d='M850 1.5C589.5 256 -34 1.5 3.5 201.5' stroke='#A0ACAF' strokeWidth='3' strokeDasharray='12 12' />
          </svg>

          <div className={classes.step}>
            <img src={step2} alt='Paso 2' style={{ height: '256px' }} />
            <div className={classes.stepInfo}>
              <h2>Cargá tus productos</h2>
              <p>Subí varias imágenes y añadí la descripción para los productos que querés vender</p>
            </div>
          </div>

          <svg viewBox='-100 0 1000 168' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path opacity='0.3' d='M2 0C2 224.959 480 -33.5 714 166' stroke='#A0ACAF' strokeWidth='3' strokeDasharray='12 12' />
          </svg>

          <div className={classes.step}>
            <div className={classes.stepInfo}>
              <h2>Definí el stock y el tiempo</h2>
              <p>Determiná la cantidad de unidades a vender de cada producto, así como el tiempo que dura la publicación.</p>
            </div>
            <img src={step3} alt='Paso 3' style={{ height: '265px' }} />
          </div>
        </div>

        <div className={classes.end}>
          <h1>¿Te interesa formar parte?</h1>
          <h2>Dejanos tu mail y te contactamos a la brevedad</h2>
          <Formik
            initialValues={{
              email: ''
            }}
          >
            <Form>
              <Input name='email' placeholder='email@email.com' />
              <Button type='submit'>Enviar</Button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default LandingV2
