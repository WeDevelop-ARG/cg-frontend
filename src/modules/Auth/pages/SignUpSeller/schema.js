import * as Yup from 'yup'

export const initialValues = {
  name: '',
  email: '',
  password: '',
  street: '',
  streetNumber: '',
  city: '',
  state: '',
  flat: '',
  CUIT: '',
  businessVertical: '',
  AFIPCondition: ''
}

export const schema = Yup.object().shape({
  password: Yup.string()
    .required('La contraseña es requerida')
    .min(8, 'Tu contraseña debe tener un mínimo de 8 caracteres'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('El e-mail es requerido'),
  street: Yup.string()
    .required('La calle es requerida'),
  streetNumber: Yup.number()
    .required('El número de calle es requerido')
    .min(0, 'El número no puede ser menor a cero'),
  city: Yup.string()
    .required('La ciudad es requerida'),
  state: Yup.string()
    .required('La provincia es requerida'),
  flat: Yup.string(),
  CUIT: Yup.number()
    .required('El CUIT es requerido')
    .min(0, 'El CUIT no es válido'),
  businessVertical: Yup.string()
    .required('El rubro es requerido'),
  AFIPCondition: Yup.string()
    .required('La condicion frente al AFIP es requerida'),
  name: Yup.string()
    .required('La razón social es requerida')
})
