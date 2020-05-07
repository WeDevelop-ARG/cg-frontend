import React, { useContext } from 'react'
import { Form, Formik } from 'formik'
import Input from '../../components/Input'
import * as Yup from 'yup'
import ShapeAuth from '../../vectors/shape-auth.svg'
import ManShape from '../../vectors/man.svg'
import { Link, useHistory } from 'react-router-dom'
import Button from '../../components/Button'
import { logGAEvent } from '../../firebase.js'
import Icon from '../../components/Icon'
import useSignup from '../../hooks/useSignupMutation'
import AuthContext from '../../Contexts/AuthContext/context'
import Loading from '../../components/Loading'
import useMediaQuery from '../../hooks/useMediaQuery'

import classes from './styles.module.scss'
const BREAK_POINT = '(max-device-width: 576px)'

const Signup = () => {
  const isMobile = useMediaQuery(BREAK_POINT)
  const { handleAuth } = useContext(AuthContext)
  const { signup, loading } = useSignup()

  const history = useHistory()

  const SignupSchema = Yup.object().shape({
    password: Yup.string()
      .required('La contraseña es requerida')
      .min(8, 'Tu contraseña debe tener un mínimo de 8 caracteres'),
    email: Yup.string()
      .email('E-mail inválido')
      .required('El e-mail es requerido'),
    firstName: Yup.string()
      .required('El nombre es requerido'),
    lastName: Yup.string()
      .required('El apellido es requerido')
  })

  if (loading) return <Loading />

  return (
    <div className={classes.container}>
      {isMobile && <Icon className={classes.mobileShape} icon={ShapeAuth} />}
      <div className={classes.formContainer}>
        <h2 className={classes.greetings}>Creá tu cuenta</h2>
        <Formik
          initialValues={{
            email: '',
            password: '',
            firstName: '',
            lastName: ''
          }}
          onSubmit={async ({ email, password, firstName, lastName }) => {
            const { token } = await signup({ email, password, name: `${firstName} ${lastName}` })

            handleAuth(token)

            await history.push('/')
          }}
          validationSchema={SignupSchema}
        >
          <Form className={classes.form}>
            <div className={classes.formInline}>
              <div>
                <label className={classes.labels}>Nombre</label>
                <Input
                  name='firstName'
                  placeholder='Ingresá tu nombre'
                />
              </div>
              <div>
                <label className={classes.labels}>Apellido</label>
                <Input
                  name='lastName'
                  placeholder='Ingresá tu apellido'
                />
              </div>
            </div>
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
            <Button type='submit'>Ingresar</Button>
            <span className={classes.terms}>
              Al registrarme, declaro que soy mayor de edad y acepto los Términos y condiciones y las Políticas de privacidad.
            </span>
            <span className={classes.news}>
              ¿Ya tenés una cuenta?
              <Link className={classes.links} to='/auth/signin'>
                Crear mi cuenta
              </Link>
            </span>
          </Form>
        </Formik>
      </div>
      <div className={classes.shape} style={{ backgroundImage: `url(${ShapeAuth})` }}>
        <img src={ManShape} className={classes.manShape} />
      </div>
    </div>
  )
}

export default Signup
