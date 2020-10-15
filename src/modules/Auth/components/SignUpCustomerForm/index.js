import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'formik'
import Button from '~/src/modules/MainApp/components/Button'
import Input from '~/src/modules/MainApp/components/Input'

import classes from './styles.module.scss'

const SignUpCustomerForm = () => {
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
      <label className={classes.labels}>Dirección</label>
      <div className={classes.formInline}>
        <Input
          name='state'
          placeholder='Provincia'
        />
        <Input
          name='city'
          placeholder='Ciudad'
        />
      </div>
      <div className={classes.formInline}>
        <Input
          name='street'
          placeholder='Calle'
        />
        <Input
          name='streetNumber'
          placeholder='Número'
          type='number'
        />
      </div>
      <div>
        <Input
          name='flat'
          placeholder='Piso / Departamento (opcional)'
        />
      </div>
      <div>
        <label className={classes.labels}>E-mail</label>
        <Input
          name='email'
          placeholder='Ingresá tu e-mail'
        />
      </div>
      <div>
        <label className={classes.labels}>Contraseña</label>
        <Input
          name='password'
          type='password'
          placeholder='Ingresá al menos 8 caracteres'
        />
      </div>
      <div className={classes.button}>
        <Button type='submit'>
          Crear mi cuenta
        </Button>
      </div>
      <span className={classes.terms}>
        Al registrarme, declaro que soy mayor de edad y acepto los Términos y condiciones y las Políticas de privacidad.
      </span>
      <span className={classes.news}>
        ¿Ya tenés una cuenta?
        <Link className={classes.links} to='/auth/ingresar'>
          Ingresar
        </Link>
      </span>
    </Form>
  )
}

export default SignUpCustomerForm
