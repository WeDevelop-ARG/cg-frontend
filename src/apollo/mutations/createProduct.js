import gql from 'graphql-tag'
import productFragment from '../fragments/product'

export default gql`
  mutation createProduct($productInput: ProductInput!) {
    createProduct(input: $productInput) {
      ...product
    }
  }
  ${productFragment}
`
