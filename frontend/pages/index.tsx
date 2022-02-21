import { gql } from '@apollo/client';
import { initializeApollo } from '../apollo/apollo-client';
import IndexLayout from './IndexLayout';
import Form from '../components/form/Form';
import Table from '../components/table';
import Container from '../components/container';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function Home() {
    return (
        <IndexLayout>
            <Container>
                <Form />
                <Table />
            </Container>
        </IndexLayout>
    );
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function getServerSideProps() {
    const apolloClient = initializeApollo();

    await apolloClient.query({
        query: gql`
            query {
                getAllUsers {
                    name
                    surName
                    id
                    birthday
                }
            }
        `,
    });

    return {
        props: {
            initialApolloState: apolloClient.cache.extract(),
        },
    };
}
