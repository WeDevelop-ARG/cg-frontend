import { useMutation } from '@apollo/react-hooks'
import createGroupMutation from '~/src/apollo/mutations/createGroup'

function useCreateGroupMutation () {
  const [mutate, { loading, error, called, data }] = useMutation(createGroupMutation)

  return {
    loading,
    error,
    called,
    response: data?.createGroup,
    createGroup: async (groupInput) => mutate({ variables: { groupInput } })
  }
}

export default useCreateGroupMutation
