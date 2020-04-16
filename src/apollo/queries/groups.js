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
        photos {
          url
        }
      }
      type
      minParticipants
      maxParticipants
      participantsCount
      isSubscribed
      expiresAt
    }
  }
`

export default GET_GROUPS
