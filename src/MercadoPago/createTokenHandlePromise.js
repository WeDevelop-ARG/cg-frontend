import MercadoPago from './MercadoPago'

const createTokenHandlePromise = ($form) => {
  return new Promise((resolve, reject) => {
    MercadoPago.createToken($form, (status, response) => {
      if (status !== 200 && status !== 201) return reject(new Error('verify filled data'))

      return resolve(response.id)
    })
  })
}

export default createTokenHandlePromise
