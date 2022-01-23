import { gql } from '@apollo/client';
import client from '../apollo/apollo-client';
import IndexLayout from './IndexLayout';
import Form from '../components/form/Form';

import Table from '../components/table';

export default function Home({ users }) {
  console.log('🚀 ~ file: index.tsx ~ line 8 ~ Home ~ users', users);
  return (
    <IndexLayout>
      <div>
        <Form />
      </div>
      <div>
        <Table />
      </div>
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
    `
  });

  return {
    props: {
      users: data.getAllUsers
    }
  };
}
