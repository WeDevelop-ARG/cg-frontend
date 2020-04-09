import gql from 'graphql-tag'

export default gql`
  mutation login($userInput: LoginInput!) {
    login(input: $userInput) {
      id
      name
      email
      token
    }
  }
`
