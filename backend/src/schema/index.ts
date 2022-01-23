import path from 'path';
import  { loadFilesSync } from '@graphql-tools/load-files';

const typeDefs = loadFilesSync(path.join(__dirname, './schema.graphql'));

export default typeDefs;