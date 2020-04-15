import gql from 'graphql-tag'

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
          id
          name
          description
          price
          photoUrl
          marketPrice
          price
          photos {
            url
          }
        }
      }
    }
  }
`
