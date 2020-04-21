import gql from 'graphql-tag'

export default gql`
  mutation deleteGroup($id: ID) {
    deleteGroup(id: $id)
  }
`
