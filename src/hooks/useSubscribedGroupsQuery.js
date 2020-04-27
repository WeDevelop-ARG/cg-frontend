import { useQuery } from '@apollo/react-hooks'
import subscribedGroupsQuery from '../apollo/queries/subscribedGroups'

function useSubscribedGroupsQuery () {
  const { loading, error, data, refetch } = useQuery(subscribedGroupsQuery, { fetchPolicy: 'no-cache' })

  return {
    refetch,
    loading,
    error,
    currentUser: data && data.currentUser
  }
}

export default useSubscribedGroupsQuery
