import { ApolloClient, InMemoryCache } from "@apollo/client";

export const cliente = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o2ewnd07yb01xi0jgf6ae3/master',
  cache: new InMemoryCache()
})