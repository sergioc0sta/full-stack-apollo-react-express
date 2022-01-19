import { gql } from 'apollo-server-express';

const typeDefs = gql`
    scalar Date
    
    type Query {
        getAllUsers: [User]
        user(userId: ID!): User!
    }

    type Mutation {
        createUser(user: UserInput): User
    }

    input UserInput {
        name: String
        surName: String
        country: String
        birthday: String
    }

    type User {
        id: ID
        name: String
        surName: String
        country: String
        birthday: Date
    }
`;

export default typeDefs;