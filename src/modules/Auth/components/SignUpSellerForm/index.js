import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'formik'
import Button from '~/src/modules/MainApp/components/Button'
import Input from '~/src/modules/MainApp/components/Input'
import Select from '~/src/modules/MainApp/components/Select'

import { AFIP_CONDITIONS_OPTIONS } from './constants'
import classes from './styles.module.scss'

const SignUpSellerForm = () => {
  return (
    <Form className={classes.form}>
      <div className={classes.formInline}>
        <div>
          <label className={classes.labels}>Razón social</label>
          <Input
            name='name'
            placeholder='Ingresá razón social'
          />
        </div>
        <div>
          <label className={classes.labels}>Rubro</label>
          <Input
            name='businessVertical'
            placeholder='Ingresá el rubro'
          />
        </div>
      </div>
      <div className={classes.formInline}>
        <div>
          <label className={classes.labels}>CUIT</label>
          <Input
            name='CUIT'
            placeholder='Ingresá el CUIT'
            type='number'
          />
        </div>
        <div>
          <label className={classes.labels}>Condicion frente al AFIP</label>
          <Select
            name='AFIPCondition'
            placeholder='Seleccioná condición'
            options={AFIP_CONDITIONS_OPTIONS}
            className={classes.afipConditionSelect}
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
          placeholder='Ingresá tu email'
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

export default SignUpSellerForm
