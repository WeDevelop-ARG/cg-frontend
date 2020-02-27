import MercadoPagoformTemplate from '../components/MercadoPagoFormTemplate'
import MercadoPago from './MercadoPago'

const createTokenByParams = ({
  email,
  docType,
  docNumber,
  cardNumber,
  paymentMethodId,
  expirationMonth,
  expirationYear,
  holderName,
  description,
  securityCode
} = {}) => {
  return new Promise((resolve, reject) => {
    MercadoPago.getIdentificationTypes()
    const $mercadoPagoformTemplate = MercadoPagoformTemplate({
      email,
      description,
      cardNumber,
      docNumber,
      docType,
      expirationMonth,
      expirationYear,
      holderName,
      paymentMethodId,
      securityCode
    })

    MercadoPago.createToken(createElementFromHTML($mercadoPagoformTemplate), (status, response) => {
      if (status !== 200 && status !== 201) {
        return reject(new Error('verify filled data'))
      }

      return resolve(response.id)
    })
  })
}

function createElementFromHTML (htmlString) {
  const div = document.createElement('div')
  div.innerHTML = htmlString.trim()

  // Change this to div.childNodes to support multiple top-level nodes
  return div.firstChild
}

export default createTokenByParams
