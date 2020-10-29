import gql from 'graphql-tag'

export default gql`
  mutation setPersonalInformation($userId: ID!, $personalInformation: PersonalInformationInput!){
    setPersonalInformation(userId: $userId, personalInformation: $personalInformation) {
      id
    }
  }
`
