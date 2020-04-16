import { useMutation } from '@apollo/react-hooks'

import createGroupMutation from '../apollo/mutations/createGroup'

function useCreateGroupMutation () {
  const [mutate, { loading, error, called, data }] = useMutation(createGroupMutation)

  return {
    loading,
    error,
    called,
    response: data,
    createGroup: async (groupInput) => {
      const { data } = await mutate(
        {
          variables: {
            groupInput
          }
        }
      )

      return data
    }
  }
}

export default useCreateGroupMutation
