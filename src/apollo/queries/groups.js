import gql from 'graphql-tag'
import productFragment from '../fragments/product'

const GET_GROUPS = gql`
  {
    groups {
      id
      product {
        ...product
      }
      type
      minParticipants
      maxParticipants
      participantsCount
      isSubscribed
      expiresAt
    }
  }
  ${productFragment}
`

export default GET_GROUPS
