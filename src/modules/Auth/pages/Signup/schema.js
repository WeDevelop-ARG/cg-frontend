import * as Yup from 'yup'

export const initialValues = {
  email: '',
  password: '',
  firstName: '',
  lastName: ''
}

export const schema = Yup.object().shape({
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
