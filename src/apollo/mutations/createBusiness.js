import gql from 'graphql-tag'

export default gql`
 mutation createBusiness($userId: ID!, $businessInformation: CreateBusinessInput!) {
   createBusiness(userId: $userId, businessInformation: $businessInformation) {
    id
    fantasyName
    realName
    vertical
    CUIT
    AFIPCondition
   }
 }
`
