import { useQuery } from '@apollo/react-hooks'
import groupQuery from '~/src/apollo/queries/group'

function useGroupQuery (id) {
  const { loading, error, data, refetch } = useQuery(groupQuery, { variables: { id } })

  return {
    refetch,
    loading,
    error,
    group: data?.group
  }
}

export default useGroupQuery
