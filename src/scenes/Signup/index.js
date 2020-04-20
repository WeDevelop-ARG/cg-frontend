import React, { useContext } from 'react'
import { useFormik } from 'formik'
import Input from '../../components/Input'
import * as Yup from 'yup'
import ShapeAuth from '../../vectors/shape-auth.svg'
import ManShape from '../../vectors/man.svg'
import { Link, useHistory } from 'react-router-dom'
import Button from '../../components/Button'

import useLogin from '../../hooks/useLoginMutation'
import AuthContext from '../../Contexts/AuthContext/context'

import './Signup.scss'

const Signup = () => {
  const { handleAuth } = useContext(AuthContext)
  const { login } = useLogin()

  const history = useHistory()

  const SignupSchema = Yup.object().shape({
    password: Yup.string()
      .required('La contraseña es requerida')
      .min(8, 'Tu contraseña debe tener un mínimo de 8 caracteres'),
    email: Yup.string()
      .email('E-mail inválido')
      .required('El E-mail es requerido'),
    firstName: Yup.string()
      .required('El nombre es requerido'),
    lastName: Yup.string()
      .required('El apellido es requerido')
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    },
    onSubmit: async ({ email, password }) => {
      const { token } = await login({ email, password })

      handleAuth(token)

      await history.push('/')
    },
    validationSchema: SignupSchema
  })

  return (
    <div className='signup--container'>
      <div className='signup__form--container'>
        <h2 className='signup--greetings'>Creá tu cuenta</h2>
        <form className='signup__form' onSubmit={formik.handleSubmit}>
          <div className='signup__form--inline'>
            <div>
              <label className='signup__form--labels'>Nombre</label>
              <Input
                name='firstName'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                errors={formik.errors}
                touched={formik.touched}
                placeholder='Ingresá tu nombre'
              />
            </div>
            <div>
              <label className='signup__form--labels'>Apellido</label>
              <Input
                name='lastName'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                errors={formik.errors}
                touched={formik.touched}
                placeholder='Ingresá tu apellido'
              />
            </div>
          </div>
          <label className='signup__form--labels'>Email</label>
          <Input
            name='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            errors={formik.errors}
            touched={formik.touched}
            placeholder='Ingresá tu email'
          />
          <label className='signup__form--labels'>Contraseña</label>
          <Input
            name='password'
            isPassword
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            errors={formik.errors}
            touched={formik.touched}
            placeholder='Ingresá al menos 8 caracteres'
          />
          <Button type='submit'>Ingresar</Button>
          <span className='signup__form__terms'>
            Al registrarme, declaro que soy mayor de edad y acepto los Términos y condiciones y las Políticas de privacidad.
          </span>
          <span className='signup__form__new'>
            ¿Ya tenés una cuenta?
            <Link className='signup__form__links' to='/auth/signin'>
              Ingresá
            </Link>
          </span>
        </form>
      </div>
      <div className='signup__shape' style={{ backgroundImage: `url(${ShapeAuth})` }}>
        <img src={ManShape} className='signup__shape__man-shape' />
      </div>
    </div>
  )
}

export default Signup
