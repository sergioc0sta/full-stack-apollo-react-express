import '../styles/globals.ts';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../apollo/apollo-client';
import { appWithTranslation } from 'next-i18next';

const MyApp = ({ Component, pageProps }): any => {
    const apolloClient = useApollo(pageProps.initialApolloState);
    return (
        <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
};

export default appWithTranslation(MyApp);
