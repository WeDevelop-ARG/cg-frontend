import React from 'react'
import { Form, Formik } from 'formik'
import Input from '../../../components/Input/normal'
import Button from '../../../components/Button'
import useMediaQuery from '../../../hooks/useMediaQuery'
import useSubscribeToNewsletterMutation from '../../../hooks/useSubscribeToNewsletterMutation'
import { useToasts } from 'react-toast-notifications'

import classes from './styles.module.scss'
import sendImg from '../../../vectors/send.svg'
const BREAK_POINT = '(max-device-width: 576px)'

const EmailForm = () => {
  const { subscribeToNewsletters } = useSubscribeToNewsletterMutation()
  const { addToast } = useToasts()
  const isMobile = useMediaQuery(BREAK_POINT)
  const send = isMobile ? <img src={sendImg} /> : 'Enviar'
  return (
    <div className={classes.end}>
      <h1>¿Te interesa formar parte?</h1>
      <h2>Dejanos tu mail y te contactamos a la brevedad</h2>
      <Formik
        initialValues={{
          email: ''
        }}
        onSubmit={async ({ email }) => {
          await subscribeToNewsletters({ email })
          addToast('Tu suscripción se realizó correctamente.', { autoDismiss: true })
        }}
      >
        <Form id='seller_landing_cta_subscribe_form'>
          <Input name='email' placeholder='email@email.com' />
          <Button type='submit'>{send}</Button>
        </Form>
      </Formik>
    </div>
  )
}

export default EmailForm
