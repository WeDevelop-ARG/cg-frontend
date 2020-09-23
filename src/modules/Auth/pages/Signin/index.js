import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import ShapeAuth from '~/src/vectors/shape-auth.svg'
import WomanShape from '~/src/vectors/woman.svg'
import AuthContext from '~/src/Contexts/AuthContext/context'
import Button from '~/src/modules/MainApp/components/Button'
import Input from '~/src/modules/MainApp/components/Input'
import Loading from '~/src/modules/MainApp/components/Loading'
import Icon from '~/src/modules/MainApp/components/Icon'
import useMediaQuery from '~/src/hooks/useMediaQuery'
import useLogin from '../../hooks/useLoginMutation'

import classes from './styles.module.scss'

const BREAK_POINT = '(max-device-width: 576px)'

const Signin = () => {
  const isMobile = useMediaQuery(BREAK_POINT)

  const { handleAuth } = useContext(AuthContext)
  const { login, loading } = useLogin()

  const history = useHistory()

  const SigninSchema = Yup.object().shape({
    password: Yup.string()
      .required('La contraseña es requerida'),
    email: Yup.string()
      .email('E-mail inválido')
      .required('El e-mail es requerido')
  })

  if (loading) return <Loading />

  return (
    <div
      className={classes.container}
    >
      {isMobile && <Icon className={classes.mobileShape} icon={ShapeAuth} />}
      <div className={classes.formContainer}>
        <h2 className={classes.greetings}>¡HOLA!</h2>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={SigninSchema}
          onSubmit={async ({ email, password }) => {
            const { token } = await login({ email, password })

            handleAuth(token)

            await history.push('/mis-productos')
          }}
        >
          <Form
            className={classes.form}
          >
            <label className={classes.labels}>Email</label>
            <Input
              name='email'
              placeholder='Ingresá tu email'
            />
            <label className={classes.labels}>Contraseña</label>
            <Input
              name='password'
              type='password'
              placeholder='Ingresá al menos 8 caracteres'
            />
            <Link className={classes.links}>
              Olvidaste tu contraseña?
            </Link>
            <Button type='submit'>Ingresar</Button>
            <span className={classes.news}>
              ¿Sos un usuario nuevo?
              <Link className={classes.links} to='/auth/signup'>
                Registrate
              </Link>
            </span>
          </Form>
        </Formik>
      </div>
      <div className={classes.shape} style={{ backgroundImage: `url(${ShapeAuth})` }}>
        <img src={WomanShape} className={classes.womanShape} />
      </div>
    </div>
  )
}

export default Signin
