import { useQuery } from '@apollo/react-hooks'
import getProductsQuery from '../apollo/queries/getProducts'

function useCurrentUser () {
  const { loading, error, data, refetch } = useQuery(getProductsQuery)

  return {
    refetch,
    loading,
    error,
    products: (data && data.getProducts) || []
  }
}

export default useCurrentUser
