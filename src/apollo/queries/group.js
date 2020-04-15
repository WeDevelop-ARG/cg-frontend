import gql from 'graphql-tag'

export default gql`
  query group($id: ID!) {
    group(id: $id) {
      id
      product {
        id
        photoUrl
        name
        description
        price
        marketPrice
        photos {
          url
        }
      }
      type
      minParticipants
      maxParticipants
      participantsCount
      expiresAt
    }
  }
`
