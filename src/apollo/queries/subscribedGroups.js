import gql from 'graphql-tag'
import productFragment from '../fragments/product'

export default gql`
  query {
    currentUser {
      subscribedGroups {
        id
        type
        minParticipants
        maxParticipants
        participantsCount
        discount
        expiresAt
        isSubscribed
        product {
          ...product
        }
      }
    }
  }
  ${productFragment}
`
