import { gql } from '@apollo/client';
import client from '../apollo/apollo-client';
import IndexLayout from './IndexLayout';
import Form from '../components/form/Form';
import Table from '../components/table';
import Container from '../components/container';

export default function Home({ users }) {
    return (
        <IndexLayout>
            <Container>
                <Form />
                <Table />
            </Container>
        </IndexLayout>
    );
}

export async function getServerSideProps() {
    const { data } = await client.query({
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
            users: data.getAllUsers,
        },
    };
}
