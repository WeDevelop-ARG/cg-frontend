import { useQuery } from '@apollo/react-hooks'
import publishedGroupsQuery from '~/src/apollo/queries/pusblishedGroups'

function usePublishedGroupsQuery () {
  const { loading, error, data, refetch } = useQuery(publishedGroupsQuery, { fetchPolicy: 'cache-and-network' })

  return {
    refetch,
    loading,
    error,
    publishedGroups: data?.currentUser?.publishedGroups
  }
}

export default usePublishedGroupsQuery
