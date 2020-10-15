import * as Yup from 'yup'

export const initialValues = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  street: '',
  streetNumber: '',
  city: '',
  state: '',
  flat: ''
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
    .required('El apellido es requerido'),
  street: Yup.string()
    .required('La calle es requerida'),
  streetNumber: Yup.number()
    .required('El número de calle es requerido')
    .min(0, 'El número no puede ser menor a cero'),
  city: Yup.string()
    .required('La ciudad es requerida'),
  state: Yup.string()
    .required('La provincia es requerida'),
  flat: Yup.string()
})
