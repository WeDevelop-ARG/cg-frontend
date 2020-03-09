import gql from 'graphql-tag'

export default gql`
  mutation subscribeToGroup($groupSubscriptionInput: GroupSubscriptionInput!) {
    subscribeToGroup(input: $groupSubscriptionInput) {
      id
    }
  }
`
