import { useMutation } from '@apollo/react-hooks'

import signupMutation from '~/src/apollo/mutations/signup'

function useSignupMutation () {
  const [mutate, { loading, error, called, data }] = useMutation(signupMutation)

  return {
    loading,
    error,
    called,
    response: data,
    signup: async (values) => {
      const { data } = await mutate({ variables: { userInput: values } })

      return data && data.signup
    }
  }
}

export default useSignupMutation
