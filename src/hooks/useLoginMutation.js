import { useMutation } from '@apollo/react-hooks'

import loginMutation from '../apollo/mutations/login'

function useLoginMutation () {
  const [mutate, { loading, error, called, data }] = useMutation(loginMutation)

  return {
    loading,
    error,
    called,
    response: data,
    login: async ({ email, password }) => {
      const { data } = await mutate({ variables: { userInput: { name: '', email, password } } })

      return data
    }
  }
}

export default useLoginMutation
