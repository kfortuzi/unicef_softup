import { Injectable } from '@nestjs/common';
import {
  RunnableSequence,
  RunnablePassthrough,
} from '@langchain/core/runnables';
import { StringOutputParser } from '@langchain/core/output_parsers';
import { formatDocumentsAsString } from 'langchain/util/document';
import { ChatOpenAI } from '@langchain/openai';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { PineconeStore } from '@langchain/pinecone';
import { ScoreThresholdRetriever } from 'langchain/retrievers/score_threshold';

import {
  ChatCompletionCreateParamsNonStreaming,
  ChatCompletionMessageParam,
} from 'openai/resources/chat/completions';

import { Config } from 'config';
import pinecone from 'src/clients/pinecone';
import { OpenAIService } from '../openai/openai.service';
import { PromptType } from '../openai/promptTypes';
import { AIModels, AkpaModels } from '../openai/models';
import { ChatbotHistoryService } from '../chatbotHistory/chatbotHistory.service';
import embeddings from 'src/clients/embeddings';

@Injectable()
export class ChatbotAIService {
  constructor(
    private openAIService: OpenAIService,
    private chatbotHistoryService: ChatbotHistoryService,
    private config: Config,
  ) {}

  public async askAssistant(question: string, chatHistory: string | null) {
    const model = new ChatOpenAI({
      openAIApiKey: this.config.openAiApiKey,
      modelName: AkpaModels.MAIN_CHAT,
    });

    const pineconeIndex = pinecone.Index(this.config.pineconeIndex);
    const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
      pineconeIndex,
    });

    const retriever = ScoreThresholdRetriever.fromVectorStore(vectorStore, {
      minSimilarityScore: 0.86,
      maxK: 5,
      searchType: 'similarity',
    });

    const prompt = ChatPromptTemplate.fromMessages([
      [
        'system',
        'Je një chatbot/asistent i cili i kthen përgjigje vetëm pyetjeve shqip në lidhje me punësimin, karrierën dhe agjencinë e punësimit (AKPA) në Shqipëri. Pyetja ime mund të jetë në lidhje me gjetjen e vendeve të lira punes ku në bazë të kontekstit duhet të më rekomandosh vende të lira pune ose në pyetje mund të të kërkoj të më japesh informacione për sektorin e punësimit. Përgjigja duhet të jetë me patjetër në gjuhën shqipe dhë në mënyre të sakte sintaksore/gjuhësore.',
      ],
      chatHistory
        ? [
            'human',
            'Pyetja që do të bëj është në vazhdimësi të bisedes sonë. Ky është historiku i bisedes deri në këtë moment: {history}',
          ]
        : ['human', 'Ky është fillimi i bisedes sonë.'],
      ['human', 'Kjo është pyetja ime : {input}.'],
      [
        'assistant',
        'Ok, në rregull, e kuptova pyetjen/kërkesën tënde. Cfarë duhet të bëj me të?',
      ],
      [
        'human',
        'Analizoje mirë pyetjen e mësiperme. Në varësi të historikut të bisedes, gjej nëse pyetja ka të bëje me gjetjen e një vendi të ri pune apo po kërkoj informacione të përgjithshme mbi AKPA (agjencinë e punësimit), karrierën, sektorin e punësimit etj.\n RASTI 1: Nesë pyetja ime ka të bëjë me gjetjen/kërkimin e vendeve të lira të punës, përdor këto informacione si më relevantet për pyetjen time : {context}. Nëse këto informacione nuk kanë fare lidhje me profesionin që po kërkoj, thuaj që asnjë vend pune nuk u gjet. Gjithashtu nëse emri i profesionit nuk është i vlefshëm, kthe një përgjigje që puna nuk është e vlefshme. Nëse këto informacione përmbajnë të dhëna/vende të lira pune që përputhen me punën që po kërkoj. Në këtë rast nise fjalinë duke thënë se këto jane vendet e punës, renditi ato dhe gjenero një përshkrim/përmbledhje për secilën duke përmendur të dhënat për punën si psh lokacioni, adresa, aftësitë dhe eksperiencën e nevojshme për tu pranuar si dhe më shumë rëndësi të rikthesh linkun e aplikimit. \n RASTI 2: Në rast se pyetja ime nuk ka të bëjë me gjetjen e një pune,por me gjetjen e informacioneve të ndryshme mbi sektorin e punësimit më kthe një përgjigje në bazë të njohurive tua.\n Për secilin rast më kthe një përgjigje të plotë, me ton profesional.',
      ],
    ]);

    const chain = RunnableSequence.from([
      {
        context: retriever.pipe(formatDocumentsAsString),
        input: new RunnablePassthrough(),
        history: () => {
          return chatHistory;
        },
      },
      {
        context: (previousOutput) => previousOutput.context,
        input: (previousOutput) => previousOutput.input,
        history: (previousOutput) => previousOutput.history,
      },
      prompt,
      model,
      new StringOutputParser(),
    ]);

    return await chain.invoke(question);
  }

  async generateChatHistorySummary(userId: string) {
    const chatHistory =
      await this.chatbotHistoryService.findLastConversationHistoryPerUser(
        userId,
      );

    // use the whole history as input if it's the beginning of the conversation
    if (chatHistory.length <= 7) return JSON.stringify(chatHistory);

    const messages: ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content:
          'Ti je nje asistent qe gjeneron nje permbledhje te te gjitha pyetjeve dhe pergjigjeve te bera gjate nje bisede mes nje perdoruesi dhe nje asisteni AI. Permbledhja duhet te jete nje tekst paragraf qe thekson pikat me te rendesishme te biseds. Pergjigja duhet te jete vetem ne gjuhen shqipe.',
      },
      {
        role: 'user',
        content: `Kjo eshte biseda per te cilen duhet te gjenerosh nje permbledhje : \n${JSON.stringify(
          chatHistory,
        )}.\n Kthe vetem permbledhjen si string`,
      },
    ];

    const body: ChatCompletionCreateParamsNonStreaming = {
      messages,
      model: AIModels.gpt_4_1106_preview,
      response_format: { type: 'text' },
    };

    return await this.openAIService.generateCompletion(
      body,
      userId,
      PromptType.GenerateHistorySummaryForMainChatbot,
    );
  }
}
