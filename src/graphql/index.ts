import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost'

import gql from 'graphql-tag'

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
    cartItems: [],
  },
})

export const signInMutation = (input: {
  email: string
  password: string
}) => gql`
  mutation {
    signUp(input: ${input})
  }
`
