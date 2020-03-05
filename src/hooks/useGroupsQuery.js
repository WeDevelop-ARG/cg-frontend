import { useQuery } from '@apollo/react-hooks'
import GET_GROUPS from '../apollo/queries/groups'

function useGroupsQuery () {
  const { loading, error, data, refetch } = useQuery(GET_GROUPS)

  return {
    refetch,
    loading,
    error,
    groups: (data && data.groups) || []
  }
}

export default useGroupsQuery
