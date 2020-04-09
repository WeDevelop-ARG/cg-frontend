import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'

const authLink = setContext((_, { headers }) => {
  const token = window.localStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null
    }
  }
})

const httpLink = new HttpLink({
  uri: process.env.API_URI || 'http://localhost:3001/graphql'
})

const link = authLink.concat(httpLink)

export default link
