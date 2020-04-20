import gql from 'graphql-tag'
import productFragment from '../fragments/product'

export default gql`
  query {
    currentUser {
      publishedGroups {
        id
        type
        minParticipants
        maxParticipants
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
