import gql from 'graphql-tag'
import productFragment from '../fragments/product'

export default gql`
  mutation createGroup($groupInput: GroupInput!) {
    createGroup(input: $groupInput) {
      id
      product {
        ...product
      }
      type
      minParticipants
      maxParticipants
      discount
      expiresAt
    }
  }
  ${productFragment}
`
