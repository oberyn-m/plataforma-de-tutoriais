import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.VITER_API_URL,
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITER_API_ACESS_TOKEN}`
  },
  cache: new InMemoryCache()
})