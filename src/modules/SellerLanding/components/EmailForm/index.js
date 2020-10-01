import React from 'react'
import { Form, Formik } from 'formik'
import Input from '~/src/modules/MainApp/components/Input/normal'
import Button from '~/src/modules/MainApp/components/Button'
import useMediaQuery from '~/src/hooks/useMediaQuery'
import useSubscribeToNewsletterMutation from '~/src/modules/MainApp/hooks/useSubscribeToNewsletterMutation'
import { useToasts } from 'react-toast-notifications'
import { logFormSubmit } from '~/src/utils/analytics'

import classes from './styles.module.scss'
import sendImg from '~/src/vectors/send.svg'
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
        onSubmit={async ({ email }, { resetForm }) => {
          try {
            await subscribeToNewsletters({ email })
          } finally {
            addToast('Tu suscripción se realizó correctamente.', { autoDismiss: true })
            await logFormSubmit('seller_landing_cta_subscribe_form')
            resetForm()
          }
        }}
      >
        <Form>
          <Input name='email' placeholder='email@email.com' />
          <Button type='submit'>{send}</Button>
        </Form>
      </Formik>
    </div>
  )
}

export default EmailForm
