import { HttpLink } from 'apollo-link-http'

const link = new HttpLink({
  uri: process.env.REACT_APP_API_URI || 'http://localhost:3001/graphql'
})

export default link
