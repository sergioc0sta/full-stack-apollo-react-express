import { gql } from '@apollo/client';

const getAllUsers = gql`
    query {
        getAllUsers {
            name
            surName
            id
            birthday
        }
    }
`;

export default getAllUsers;
