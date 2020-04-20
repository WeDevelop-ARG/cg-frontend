import gql from 'graphql-tag'
import productFragment from '../fragments/product'

export default gql`
  query product($id: ID!) {
    product(id: $id) {
      ...product
    }
  }
  ${productFragment}
`
