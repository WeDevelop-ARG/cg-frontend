import MercadoPago from './MercadoPago'

const getInstallmentsPromise = ({ bin = '', amount }) => {
  return new Promise((resolve) => {
    MercadoPago.getInstallments({ bin: bin.replace(' ', ''), amount }, (status, response) => {
      if (response.length > 0) {
        return resolve(response[0])
      }

      return resolve(null)
    })
  })
}

export default getInstallmentsPromise
