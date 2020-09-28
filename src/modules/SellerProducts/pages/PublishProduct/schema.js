import * as Yup from 'yup'

const productInitialValues = {
  title: '',
  description: '',
  marketPrice: 0,
  price: 0,
  discount: 0,
  photos: []
}

const groupInitialValues = {
  maxParticipants: '',
  dayExpiresAt: '',
  hourExpiresAt: ''
}

const initialValues = {
  ...productInitialValues,
  ...groupInitialValues
}

const schema = [
  Yup.object().shape({
    title: Yup.string()
      .required('Se requiere un título'),
    description: Yup.string()
      .required('Se requiere una descripción'),
    marketPrice: Yup.number().required('Se requiere un precio minorista')
      .typeError('Debe ser un número')
      .positive('Debe ser mayor que 0'),
    price: Yup.number().required('Se require un precio mayorista')
      .typeError('Debe ser un número')
      .positive('Debe ser mayor que 0')
  }),
  Yup.object().shape({
    maxParticipants: Yup.number()
      .required('Se requiere un tipo de grupo'),
    expiresAtDay: Yup.string()
      .required('Se requiere una dia de expiración del grupo'),
    expiresAtHour: Yup.string()
      .required('Se requiere una hora de expiración del grupo')
  })
]

export { schema, initialValues }
