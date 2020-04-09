import gql from 'graphql-tag'

export default gql`
  mutation createProduct($productInput: ProductInput!) {
    createProduct(input: $productInput) {
      id
      name
      description
      photoUrl
      price
      marketPrice
    }
  }
`
