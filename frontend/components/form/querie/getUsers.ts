import { gql } from '@apollo/client';

const createUser = gql`
    mutation CreateUser($name: String, $surName: String, $country: String, $birthday: String) {
        createUser(user: { name: $name, surName: $surName, country: $country, birthday: $birthday }) {
            id
            name
            surName
            country
            birthday
        }
    }
`;

export default createUser;
