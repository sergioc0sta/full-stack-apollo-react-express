import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import React from 'react';

let apolloClient: any;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined', // set to true for SSR
        link: new HttpLink({
            uri: 'http://localhost:4949/graphql',
        }),
        cache: new InMemoryCache(),
    });
}

export function initializeApollo(initialState: any = null): any {
    const _apolloClient = apolloClient ?? createApolloClient();

    // If your page has Next.js data fetching methods that use Apollo Client,
    // the initial state gets hydrated here
    if (initialState) {
        // Get existing cache, loaded during client side data fetching
        const existingCache = _apolloClient.extract();

        // Restore the cache using the data passed from
        // getStaticProps/getServerSideProps combined with the existing cached data
        _apolloClient.cache.restore({ ...existingCache, ...initialState });
    }

    // For SSG and SSR always create a new Apollo Client
    if (typeof window === 'undefined') return _apolloClient;

    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = _apolloClient;
    return _apolloClient;
}

export function useApollo(initialState: any): any {
    const store = React.useMemo(() => initializeApollo(initialState), [initialState]);
    return store;
}
