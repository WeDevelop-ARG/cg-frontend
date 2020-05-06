import React, { useContext } from 'react'
import { Form, Formik } from 'formik'
import Input from '../../components/Input'
import * as Yup from 'yup'
import ShapeAuth from '../../vectors/shape-auth.svg'
import WomanShape from '../../vectors/woman.svg'
import { Link, useHistory } from 'react-router-dom'
import Button from '../../components/Button'
import useMediaQuery from '../../hooks/useMediaQuery'
import useLogin from '../../hooks/useLoginMutation'
import AuthContext from '../../Contexts/AuthContext/context'
import Loading from '../../components/Loading'
import Icon from '../../components/Icon'

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

            await history.push('/')
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
