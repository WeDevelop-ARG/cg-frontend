import { useMutation } from '@apollo/react-hooks'

import createSignedFileUploadURLMutation from '../apollo/mutations/createSignedFileUploadURL'

function useSignupMutation () {
  const [mutate, { loading, error, called, data }] = useMutation(createSignedFileUploadURLMutation)

  return {
    loading,
    error,
    called,
    response: data,
    createSignedFileUploadURL: async (input) => {
      const { data } = await mutate({ variables: { input } })

      return data && data.createSignedFileUploadURL
    }
  }
}

export default useSignupMutation
