import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  uri: 'http://localhost:4949/graphql',
  cache: new InMemoryCache()
});

export default client;
