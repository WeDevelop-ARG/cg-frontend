import { useQuery } from '@apollo/react-hooks'
import publishedGroupsQuery from '../apollo/queries/pusblishedGroups'

function usePublishedGroupsQuery () {
  const { loading, error, data, refetch } = useQuery(publishedGroupsQuery, { fetchPolicy: 'no-cache' })

  return {
    refetch,
    loading,
    error,
    currentUser: data && data.currentUser
  }
}

export default usePublishedGroupsQuery
