import React, { useContext } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import { Form, Formik } from 'formik'
import { useToasts } from 'react-toast-notifications'
import useMediaQuery from '../../hooks/useMediaQuery'
import AuthContext from '../../Contexts/AuthContext/context'
import Button from '../../components/Button'
import Input from '../../components/Input'

import classes from './styles.module.scss'
import send from '../../vectors/send.svg'
const BREAK_POINT = '(max-device-width: 576px)'

const ComingSoon = () => {
  const { addToast } = useToasts()
  const history = useHistory()
  const { status } = useContext(AuthContext)
  if (status) return (<Redirect to='/mis-productos' />)

  const isMobile = useMediaQuery(BREAK_POINT)
  const container = isMobile ? classes.mobileContainer : classes.container
  const goToLanding = () => {
    history.push('/quiero-vender')
  }

  return (
    <div className={container}>
      <div className={classes.data}>
        <div>
          <h1>¡Estamos en camino!</h1>
          <h3>Si sos comerciante y querés vender tus productos en nuestra web, conocé los beneficios que tenemos para vos.</h3>
          <Button onClick={goToLanding}>Quiero Vender</Button>
        </div>
        <div>
          <h2>¿Querés ser el primero en enterarse de nuestras promociones?</h2>
          <p>Dejanos tu email y suscribite a las novedades</p>
          <Formik
            initialValues={{
              email: ''
            }}
            onSubmit={() => {
              addToast('Servidor de email no establecido aún', { autoDismiss: true })
            }}
          >
            <Form>
              <Input name='email' placeholder='email@email.com' />
              <Button type='submit'><img src={send} alt='>' /></Button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon
