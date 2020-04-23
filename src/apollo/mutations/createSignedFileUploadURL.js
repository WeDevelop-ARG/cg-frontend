import gql from 'graphql-tag'

export default gql`
  mutation createSignedFileUploadURL($input: SignedFileUploadURLInput!) {
    createSignedFileUploadURL(input: $input) {
      signedRequest
      url
    }
}
`
