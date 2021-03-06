import { useMutation } from '@apollo/react-hooks'

import subscribeToGroupMutation from '../apollo/mutations/subscribeToGroup'

function useCheckoutMutation () {
  const [mutate, { loading, error, called, data }] = useMutation(subscribeToGroupMutation)

  return {
    loading,
    error,
    called,
    response: data,
    subscribeToGroup: async ({ userId, groupId, paymentMethod }) => {
      const { data } = await mutate({ variables: { groupSubscriptionInput: { userId, groupId, paymentMethod } } })

      return data
    }
  }
}

export default useCheckoutMutation
