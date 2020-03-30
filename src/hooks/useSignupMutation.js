import { useMutation } from '@apollo/react-hooks'

import signupMutation from '../apollo/mutations/signup'

function useSignupMutation () {
  const [mutate, { loading, error, called, data }] = useMutation(signupMutation)

  return {
    loading,
    error,
    called,
    response: data,
    signup: async ({ name, email, password }) => {
      const { data } = await mutate({ variables: { userInput: { name, email, password } } })

      return data
    }
  }
}

export default useSignupMutation
