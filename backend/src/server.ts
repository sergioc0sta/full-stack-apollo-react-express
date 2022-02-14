import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import resolvers from './resolvers';
import typeDefs from './schema';
import mongoose from 'mongoose';
import cors from 'cors';

async function listen(port: number): Promise<any> {
	const app = express();
	const httpServer = http.createServer(app);

	app.use('/graphqlSchema', async (res, rep) => {
		rep.sendFile('schema/graphql-schema.graphql' , { root : __dirname});	});

	app.use(cors());
	const server = new ApolloServer({
		typeDefs,
		resolvers,
		plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
	});
	await server.start();

	server.applyMiddleware({ app });

	await mongoose.connect('mongodb://localhost:27017/Users');

	console.log('MongoDB connection start...');

	return new Promise((resolve, reject) => {
		httpServer.listen(port).once('listening', resolve).once('error', reject);
	});
}

(async () => {
	try {
		await listen(4949);
		console.log('The server Graphql is ready at http://localhost:4949/graphql');
		console.log('The server Htttp is ready at http://localhost:4949/');
	} catch (error) {
		console.error('Error starting the server', error);
	}
})();

