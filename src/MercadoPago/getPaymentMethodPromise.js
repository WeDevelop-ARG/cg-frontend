import MercadoPago from './MercadoPago'

const getPaymentMethodPromise = (values) => {
  return new Promise((resolve, reject) => {
    MercadoPago.getPaymentMethod(values, (status, response) => {
      if (status !== 200) {
        return reject(new Error(`payment method info error: ${response}`))
      }

      return resolve(response[0])
    })
  })
}

export default getPaymentMethodPromise
