import gql from 'graphql-tag'

export default gql`
  mutation signup($userInput: UserInput!) {
    signup(input: $userInput) {
      id
      name
      email
    }
  }
`
