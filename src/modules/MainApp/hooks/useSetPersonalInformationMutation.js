import { useMutation } from '@apollo/react-hooks'

import setPersonalInformationMutation from '~/src/apollo/mutations/setPersonalInformation'

const useSetPersonalInformationMutation = () => {
  const [mutate, { loading, error, called, data }] = useMutation(setPersonalInformationMutation)

  return {
    loading,
    error,
    called,
    data,
    setPersonalInformation: async (userId, personalInformation) => {
      const { data } = await mutate({ variables: { userId, personalInformation } })

      return data && data.setPersonalInformation
    }
  }
}

export default useSetPersonalInformationMutation
