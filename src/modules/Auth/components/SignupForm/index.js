import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'formik'
import Button from '~/src/modules/MainApp/components/Button'
import Input from '~/src/modules/MainApp/components/Input'

import classes from './styles.module.scss'

const SigninForm = () => {
  return (
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
      <Button type='submit'>
        Crear mi cuenta
      </Button>
      <span className={classes.terms}>
        Al registrarme, declaro que soy mayor de edad y acepto los Términos y condiciones y las Políticas de privacidad.
      </span>
      <span className={classes.news}>
        ¿Ya tenés una cuenta?
        <Link className={classes.links} to='/auth/signin'>
          Ingresar
        </Link>
      </span>
    </Form>
  )
}

export default SigninForm
