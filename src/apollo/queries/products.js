import gql from 'graphql-tag'
import productFragment from '../fragments/product'

export default gql`
  query products {
    products {
      ...product
    }
  }
  ${productFragment}
`
