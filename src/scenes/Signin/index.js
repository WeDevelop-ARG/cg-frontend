import React, { useContext } from 'react'
import { useFormik } from 'formik'
import Input from '../../components/Input'
import * as Yup from 'yup'
import ShapeAuth from '../../vectors/shape-auth.svg'
import WomanShape from '../../vectors/woman.svg'
import { Link, useHistory } from 'react-router-dom'
import Button from '../../components/Button'

import useLogin from '../../hooks/useLoginMutation'
import AuthContext from '../../Contexts/AuthContext/context'

import './Signin.scss'

const Signin = () => {
  const { handleAuth } = useContext(AuthContext)
  const { login } = useLogin()

  const history = useHistory()

  const SigninSchema = Yup.object().shape({
    password: Yup.string()
      .required('La contraseña es requerida'),
    email: Yup.string()
      .email('E-mail inválido')
      .required('El E-mail es requerido')
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async ({ email, password }) => {
      const { token } = await login({ email, password })

      handleAuth(token)

      await history.push('/')
    },
    validationSchema: SigninSchema
  })

  return (
    <div className='signin--container'>
      <div className='signin__form--container'>
        <h2 className='signin--greetings'>¡HOLA!</h2>
        <form className='signin__form' onSubmit={formik.handleSubmit}>
          <label className='signin__form--labels'>Email</label>
          <Input
            name='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            errors={formik.errors}
            touched={formik.touched}
            placeholder='Ingresá tu email'
          />
          <label className='signin__form--labels'>Contraseña</label>
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
          <Link className='signin__form__links'>
            Olvidaste tu contraseña?
          </Link>
          <Button type='submit'>Ingresar</Button>
          <span className='signin__form__new'>
            ¿Sos un usuario nuevo?
            <Link className='signin__form__links' to='/auth/signup'>
              Registrate
            </Link>
          </span>
        </form>
      </div>
      <div className='signin__shape' style={{ backgroundImage: `url(${ShapeAuth})` }}>
        <img src={WomanShape} className='signin__shape__woman-shape' />
      </div>
    </div>
  )
}

export default Signin
