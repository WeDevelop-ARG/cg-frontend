import gql from 'graphql-tag'

export default gql`
  fragment product on Product {
    id
    name
    description
    price
    photoUrl
    marketPrice
    price
    photos {
      id
      url
    }
  }
`
