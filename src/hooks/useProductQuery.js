import { useQuery } from '@apollo/react-hooks'
import productQuery from '../apollo/queries/product'

function useProductQuery (id) {
  const { loading, error, data, refetch } = useQuery(productQuery, { variables: { id } })

  return {
    refetch,
    loading,
    error,
    product: data && data.product
  }
}

export default useProductQuery
