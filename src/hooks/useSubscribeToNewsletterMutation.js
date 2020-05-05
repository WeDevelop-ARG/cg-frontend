import { useMutation } from '@apollo/react-hooks'

import subscribeToNewsletterMutation from '../apollo/mutations/subscribeToNewsletter'

function useSubscribeToNewsletterMutation () {
  const [mutate, { loading, error, called, data }] = useMutation(subscribeToNewsletterMutation)

  return {
    loading,
    error,
    called,
    response: data,
    subscribeToNewsletters: async (input) => {
      const { data } = await mutate({ variables: { input } })

      return data && data.subscribeToNewsletters
    }
  }
}

export default useSubscribeToNewsletterMutation
