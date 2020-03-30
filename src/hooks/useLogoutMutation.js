import { useMutation } from '@apollo/react-hooks'

import logoutMutation from '../apollo/mutations/logout'

function useLogoutMutation () {
  const [mutate, { loading, error, called, data }] = useMutation(logoutMutation)

  return {
    loading,
    error,
    called,
    response: data,
    logout: () => mutate()
  }
}

export default useLogoutMutation
