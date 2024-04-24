import { OpenAIEmbeddings } from '@langchain/openai';
import { Config } from 'config';

const config = new Config();

export default new OpenAIEmbeddings({
  openAIApiKey: config.openAiApiKey,
});
