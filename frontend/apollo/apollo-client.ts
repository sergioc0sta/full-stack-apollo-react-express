import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
        uri: 'http://localhost:4949/graphql',
    }),
    cache: new InMemoryCache(),
});

export default client;
