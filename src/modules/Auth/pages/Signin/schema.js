import * as Yup from 'yup'

export const initialValues = {
  email: '',
  password: ''
}

export const schema = Yup.object().shape({
  password: Yup.string().required('La contraseña es requerida'),
  email: Yup.string().email('E-mail inválido').required('El e-mail es requerido')
})
