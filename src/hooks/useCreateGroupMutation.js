import { useMutation } from '@apollo/react-hooks'

import createGroupMutation from '../apollo/mutations/createGroup'

function useCreateGroupMutation () {
  const [mutate, { loading, error, called, data }] = useMutation(createGroupMutation)

  return {
    loading,
    error,
    called,
    response: data,
    createGroup: async ({ productId, type, minParticipants, maxParticipants, discount, expiresAt }) => {
      const { data } = await mutate(
        {
          variables: {
            groupInput: {
              productId,
              type,
              minParticipants,
              maxParticipants,
              discount,
              expiresAt
            }
          }
        }
      )

      return data
    }
  }
}

export default useCreateGroupMutation
