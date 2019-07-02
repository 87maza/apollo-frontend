import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost'

const cache = new InMemoryCache()

export const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'http://localhost:9000/',
    headers: {
      authorization: localStorage.getItem('token'),
    },
  }),
})

cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem('token'),
  },
})
