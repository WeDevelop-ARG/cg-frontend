import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'formik'
import Button from '~/src/modules/MainApp/components/Button'
import Input from '~/src/modules/MainApp/components/Input'

import classes from './styles.module.scss'

const SigninForm = () => {
  return (
    <Form className={classes.form}>
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
        <Link className={classes.links} to='/auth/registro-comprador'>
          Registrate
        </Link>
      </span>
    </Form>
  )
}

export default SigninForm
