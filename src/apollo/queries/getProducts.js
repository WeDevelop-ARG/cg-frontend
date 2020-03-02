import gql from 'graphql-tag'

export default gql`
  query products {
    getProducts {
      id
      photoUrl
      name
      description
      price
      marketPrice
    }
  }
`
