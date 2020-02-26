import { useMutation } from '@apollo/react-hooks'

import checkoutMutation from '../apollo/mutations/checkout'

function useCheckoutMutation () {
  const [mutate, { loading, error, called, data }] = useMutation(checkoutMutation)

  return {
    loading,
    error,
    called,
    response: data,
    checkoutPayment: async ({ productId, paymentMethod }) => {
      const { data } = await mutate({ variables: { productId, paymentMethod } })

      return data
    }
  }
}

export default useCheckoutMutation
