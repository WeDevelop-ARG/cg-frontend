import { useMutation } from '@apollo/react-hooks'

import createBusinessMutation from '~/src/apollo/mutations/createBusiness'

const useCreateBusinessMutation = () => {
  const [mutate, { loading, error, called, data }] = useMutation(createBusinessMutation)

  return {
    loading,
    error,
    called,
    data,
    createBusiness: async (userId, businessInformation) => {
      const { data } = await mutate({ variables: { userId, businessInformation } })

      return data && data.createBusiness
    }
  }
}

export default useCreateBusinessMutation
