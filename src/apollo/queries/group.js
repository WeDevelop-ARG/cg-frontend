import gql from 'graphql-tag'
import productFragment from '../fragments/product'

export default gql`
  query group($id: ID!) {
    group(id: $id) {
      id
      product {
        ...product
      }
      type
      discount
      minParticipants
      maxParticipants
      participantsCount
      expiresAt
    }
  }
  ${productFragment}
`
