import gql from 'graphql-tag'

export default gql`
  mutation subscribeToNewsletters($input: MailchimpMemberInput!) {
    subscribeToNewsletters(input: $input) {
      id
      email
    }
  }
`
