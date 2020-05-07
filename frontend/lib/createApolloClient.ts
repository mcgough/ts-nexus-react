import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import fetch from 'node-fetch'
import { endpoint } from '../config'

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: endpoint,

    // TODO: figure out Global Fetch issue
    fetch: fetch as any,
  }),
})
