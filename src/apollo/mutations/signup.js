import gql from 'graphql-tag'

export default gql`
  mutation signup($userInput: SignupInput!) {
    signup(input: $userInput) {
      id
      name
      email
      token
    }
  }
`
