import MercadoPago from './MercadoPago'
import getPaymentMethodPromise from './getPaymentMethodPromise'
import createTokenByParams from './createTokenByParams'
import getInstallmentsPromise from './getInstallmentsPromise'
import createTokenHandlePromise from './createTokenHandlePromise'
import createTokenByDOM from './createTokenByDOM'

const initialize = () => {
  MercadoPago.setPublishableKey(process.env.REACT_APP_MP_PUBLIC_KEY || 'TEST-14dcb83d-1fcc-4fb3-867c-2e59aadcdee7')
}

const getMercadoPagoInfo = async (payerInfo) => {
  const { id: paymentMethod } = await getPaymentMethodPromise({ bin: payerInfo.cardNumber.substring(0, 6) })

  const token = await createTokenByParams({ ...payerInfo, paymentMethodId: paymentMethod })

  return { accountEmail: payerInfo.email, paymentMethod, token }
}

export {
  initialize,
  getInstallmentsPromise,
  getPaymentMethodPromise,
  createTokenByParams,
  getMercadoPagoInfo,
  createTokenHandlePromise,
  createTokenByDOM
}

export default MercadoPago
