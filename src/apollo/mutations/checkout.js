import gql from 'graphql-tag'

export default gql`
  mutation checkout($checkoutInput: CheckoutInput!) {
    checkout(input: $checkoutInput) {
      id
      productId
      paymentId
      status
      statusDetail
      dateApproved
      paymentMethodId
      paymentTypeId
      payerEmail
    }
  }
`
