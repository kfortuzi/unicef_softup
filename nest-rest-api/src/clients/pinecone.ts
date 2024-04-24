import { Pinecone } from '@pinecone-database/pinecone';
import { Config } from 'config';

const config = new Config();

export default new Pinecone({
  apiKey: config.pineconeKey,
});
