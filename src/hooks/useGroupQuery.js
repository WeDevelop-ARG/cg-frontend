import { useQuery } from '@apollo/react-hooks'
import groupQuery from '../apollo/queries/group'

function useProductQuery (id) {
  const { loading, error, data, refetch } = useQuery(groupQuery, { variables: { id } })

  return {
    refetch,
    loading,
    error,
    group: data && data.group
  }
}

export default useProductQuery
