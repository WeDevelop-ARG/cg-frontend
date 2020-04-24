import { useMutation } from '@apollo/react-hooks'

import createProductMutation from '../apollo/mutations/createProduct'

function useCreateProductMutation () {
  const [mutate, { loading, error, called, data }] = useMutation(createProductMutation)

  return {
    loading,
    error,
    called,
    response: data,
    createProduct: async ({ name, description, price, marketPrice }) => {
      const { data } = await mutate(
        {
          variables: {
            productInput: {
              name,
              description,
              price,
              marketPrice
            }
          }
        }
      )

      return data
    }
  }
}

export default useCreateProductMutation
