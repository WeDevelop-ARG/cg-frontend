import MercadoPagoformTemplate from './components/MercadoPagoFormTemplate'

const MercadoPago = window.Mercadopago

function createElementFromHTML (htmlString) {
  const div = document.createElement('div')
  div.innerHTML = htmlString.trim()

  // Change this to div.childNodes to support multiple top-level nodes
  return div.firstChild
}

const initialize = () => {
  MercadoPago.setPublishableKey(process.env.MP_PUBLIC_KEY || 'TEST-14dcb83d-1fcc-4fb3-867c-2e59aadcdee7')
}

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

const createTokenPromise = ({
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

const getMercadoPagoInfo = async (payerInfo) => {
  const { id: paymentMethod } = await getPaymentMethodPromise({ bin: payerInfo.cardNumber.substring(0, 6) })

  const token = await createTokenPromise({ ...payerInfo, paymentMethodId: paymentMethod })

  return { accountEmail: payerInfo.email, paymentMethod, token }
}

export { initialize, getPaymentMethodPromise, createTokenPromise, getMercadoPagoInfo }

export default MercadoPago
