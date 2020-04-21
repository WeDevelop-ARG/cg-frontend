import { useMutation } from '@apollo/react-hooks'

import deleteGroupMutation from '../apollo/mutations/deleteGroup'

function useDeleteGroupMutation () {
  const [mutate, { loading, error, called, data }] = useMutation(deleteGroupMutation)

  return {
    loading,
    error,
    called,
    response: data,
    deleteGroup: (id) => mutate({ variables: { id } }
    )
  }
}

export default useDeleteGroupMutation
