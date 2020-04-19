import gql from 'graphql-tag'
import productFragment from '../fragments/product'

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
  ${productFragment}
`
