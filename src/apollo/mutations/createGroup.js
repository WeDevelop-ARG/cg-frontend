import gql from 'graphql-tag'

export default gql`
  mutation createGroup($groupInput: GroupInput!) {
    createGroup(input: $groupInput) {
      id
      product {
        id
        name
        description
        photoUrl
        price
        marketPrice
      }
      type
      minParticipants
      maxParticipants
      discount
      expiresAt
    }
  }
`
