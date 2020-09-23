import { useMutation } from '@apollo/react-hooks'

import loginMutation from '~/src/apollo/mutations/login'

function useLoginMutation () {
  const [mutate, { loading, error, called, data }] = useMutation(loginMutation)

  return {
    loading,
    error,
    called,
    response: data,
    login: async ({ email, password }) => {
      const { data } = await mutate({ variables: { userInput: { email, password } } })

      return data && data.login
    }
  }
}

export default useLoginMutation
