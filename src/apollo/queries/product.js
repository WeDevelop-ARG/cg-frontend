import gql from 'graphql-tag'

export default gql`
  query product($id: ID!) {
    product(id: $id) {
      id
      photoUrl
      name
      description
      price
      marketPrice
    }
  }
`
