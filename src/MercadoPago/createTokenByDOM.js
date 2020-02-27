import createTokenHandlePromise from './createTokenHandlePromise'

const createTokenByDOM = ({ paymentMethodId }) => {
  const $form = document.querySelector('#mercadopagoCheckoutForm')

  const paymentMethodIdInput = document.createElement('input')
  paymentMethodIdInput.setAttribute('name', 'paymentMethodId')
  paymentMethodIdInput.setAttribute('type', 'hidden')
  paymentMethodIdInput.setAttribute('value', paymentMethodId)
  $form.appendChild(paymentMethodIdInput)

  return createTokenHandlePromise($form)
}

export default createTokenByDOM
