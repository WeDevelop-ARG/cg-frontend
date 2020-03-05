import gql from 'graphql-tag'

const GET_GROUPS = gql`
  {
    groups {
      id
      product {
        id
        photoUrl
        name
        description
        price
        marketPrice
      }
      type
      minParticipants
      maxParticipants
      expiresAt
    }
  }
`

export default GET_GROUPS
