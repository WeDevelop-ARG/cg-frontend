import { ApolloClient } from 'apollo-client'
import { InMemoryCache as cache } from 'apollo-cache-inmemory'
import httpLink from './httpLink'

const client = new ApolloClient({
  link: httpLink,
  cache
})

export default client
