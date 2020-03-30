import gql from 'graphql-tag'

export default gql`
  mutation login($userInput: UserInput!) {
    login(input: $userInput) {
      id
      name
      email
    }
  }
`
