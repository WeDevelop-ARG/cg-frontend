import React from 'react'
import { useFormik } from 'formik'
import Input from '../../components/Input'
import * as Yup from 'yup'
import ShapeAuth from '../../vectors/shape-auth.svg'
import WomanShape from '../../vectors/woman.svg'
// import SigninForm from '../../components/Auth/SigninForm'

import './Signin.scss'

const Signin = () => {
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
    onSubmit: values => {
      window.alert(JSON.stringify(values, null, 2))
    },
    validationSchema: SigninSchema
  })

  console.log(formik)

  return (
    <div className='signin--container'>
      <div className='signin__form--container'>
        <h2 className='signin--greetings'>¡HOLA!</h2>
        <form className='signin__form'>
          <label className='signin__form--labels'>Email</label>
          <Input
            name='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            errors={formik.errors}
            touched={formik.touched}
          />
          <label className='signin__form--labels'>Password</label>
          <Input
            name='password'
            isPassword
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            errors={formik.errors}
            touched={formik.touched}
          />
        </form>
      </div>
      <div className='signin__shape' style={{ backgroundImage: `url(${ShapeAuth})` }}>
        <img src={WomanShape} className='signin__shape__woman-shape' />
      </div>
    </div>
  )
}

export default Signin
