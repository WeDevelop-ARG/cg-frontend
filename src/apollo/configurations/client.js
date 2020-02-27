import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import httpLink from './httpLink'

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export default client
