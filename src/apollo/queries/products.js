import gql from 'graphql-tag'

export default gql`
  query products {
    products {
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
  }
`
