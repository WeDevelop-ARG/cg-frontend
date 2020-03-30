import { useQuery } from '@apollo/react-hooks'
import currentUserQuery from '../apollo/queries/currentUser'

function useCurrentUserQuery () {
  const { loading, error, data, refetch } = useQuery(currentUserQuery)

  return {
    refetch,
    loading,
    error,
    currentUser: data && data.currentUser
  }
}

export default useCurrentUserQuery
