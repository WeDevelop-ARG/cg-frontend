import React from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Formik } from 'formik'
import { useToasts } from 'react-toast-notifications'
import Button from '../../components/Button'
import Input from '../../components/Input'
import useSubscribeToNewsletterMutation from '../../hooks/useSubscribeToNewsletterMutation'
import classes from './styles.module.scss'
import send from '~/src/vectors/send.svg'
import { logFormSubmit } from '~/src/utils/analytics'

const ComingSoon = () => {
  const { subscribeToNewsletters } = useSubscribeToNewsletterMutation()
  const { addToast } = useToasts()
  const history = useHistory()

  const goToLanding = () => {
    history.push('/quiero-vender')
  }

  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <h1>¡Estamos en camino!</h1>
        <h3>Si sos comerciante y querés vender tus productos en nuestra web, conocé los beneficios que tenemos para vos.</h3>
        <Button onClick={goToLanding}>Quiero Vender</Button>
      </div>
      <div className={classes.bottom}>
        <h2>¿Querés ser el primero en enterarse de nuestras promociones?</h2>
        <p>Dejanos tu email y suscribite a las novedades</p>
        <Formik
          initialValues={{
            email: ''
          }}
          onSubmit={async ({ email }, { resetForm }) => {
            try {
              await subscribeToNewsletters({ email })
              await logFormSubmit('NEWSLETTER_SUBSCRIBE_FORM')
            } finally {
              addToast('Tu suscripción se realizó correctamente.', { autoDismiss: true })
              resetForm()
            }
          }}
        >
          <Form>
            <div className={classes.inputButton}>
              <Input name='email' placeholder='email@email.com' />
              <Button type='submit'><img src={send} alt='>' /></Button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default ComingSoon
