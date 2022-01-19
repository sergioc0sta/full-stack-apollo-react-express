import { GraphQLScalarType, Kind } from 'graphql';
import UserQuery from './userQuery';
import UserMutation from './userMutation';

const dateScalar = new GraphQLScalarType({
	name: 'Date',
	parseValue(value: any): any {
		return new Date(value);
	},
	serialize(value: any):any {
		return value.toISOString();
	},
	parseLiteral(ast) {
		if (ast.kind === Kind.INT) {
			return new Date(ast.value);
		}
		return null;
	},
});

const resolvers = {
	Query: {
		...UserQuery,
	},
	Mutation: {
		...UserMutation,
	},
	Date: dateScalar
};

export default resolvers;
