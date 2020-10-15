import dayjs from 'dayjs'
import * as Yup from 'yup'

const productInitialValues = {
  title: '',
  description: '',
  marketPrice: 0,
  price: 0,
  discount: 0,
  photos: [],
  photoURLs: ''
}

const groupInitialValues = {
  groupSize: '',
  dayExpiresAt: dayjs().toISOString(),
  hourExpiresAt: '11:59 PM'
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
      .positive('Debe ser mayor que 0'),
    photoURLs: Yup.string()
  }),
  Yup.object().shape({
    maxParticipants: Yup.number()
      .required('Se requiere un tipo de grupo'),
    dayExpiresAt: Yup.string()
      .required('Se requiere una dia de expiración del grupo'),
    hourExpiresAt: Yup.string()
      .required('Se requiere una hora de expiración del grupo')
  })
]

export { schema, initialValues }
