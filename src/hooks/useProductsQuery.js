import { useQuery } from '@apollo/react-hooks'
import productsQuery from '../apollo/queries/products'

function useCurrentUser () {
  const { loading, error, data, refetch } = useQuery(productsQuery)

  return {
    refetch,
    loading,
    error,
    products: (data && data.products) || []
  }
}

export default useCurrentUser
