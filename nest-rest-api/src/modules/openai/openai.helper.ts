import { Injectable } from '@nestjs/common';
// import { OpenAIService } from './openai.service';
import { ChatCompletionMessageParam } from 'openai/resources';
import { FAQJson } from './faq';
import * as fs from 'fs';

@Injectable()
export class HelperService {
  // constructor(private openAIService: OpenAIService) {}

  async loopProfiles() {
    try {
      FAQJson.forEach(({ answer, question, context }) => {
        this.generatefileJsonl(question, answer, context);
      });
    } catch (error) {
      console.log(error);
    }
  }

  async generatefileJsonl(question: string, answer: string, context: string) {
    const messages: ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content: `Je një chatbot/asistent i cili i kthen përgjigje vetëm pyetjeve shqip në lidhje me punësimin, karrierën dhe agjencinë e punësimit (AKPA) në Shqipëri. Pyetja ime mund të jetë në lidhje me gjetjen e vendeve të lira punes ku në bazë të kontekstit duhet të më rekomandosh vende të lira pune ose në pyetje mund të të kërkoj të më japesh informacione për sektorin e punësimit. Përgjigja duhet të jetë me patjetër në gjuhën shqipe dhë në mënyre të sakte sintaksore/gjuhesore.`,
      },
      {
        role: 'user',
        content: `Ky është fillimi i bisedes sonë.`,
      },
      {
        role: 'user',
        content: `Kjo është pyetja ime : ${question}.`,
      },
      {
        role: 'assistant',
        content: `Ok, në rregull, e kuptova pyetjen/kërkesën tënde. Cfarë duhet të bëj me të?`,
      },
      {
        role: 'user',
        content: `Analizoje mirë pyetjen e mësiperme. Në varësi të historikut të bisedes, gjej nëse pyetja ka të bëje me gjetjen e një vendi të ri pune apo po kërkoj informacione të përgjithshme mbi AKPA (agjencinë e punësimit), karrierën, sektorin e punësimit etj.\n RASTI 1: Nesë pyetja ime ka të bëjë me gjetjen/kërkimin e vendeve të lira të punës, përdor këto informacione si më relevantet për pyetjen time : ${context}. Nëse këto informacione nuk kanë fare lidhje me profesionin që po kërkoj, thuaj që asnjë vend pune nuk u gjet. Gjithashtu nëse emri i profesionit nuk është i vlefshëm, kthe një përgjigje që puna nuk është e vlefshme. Nëse këto informacione përmbajnë të dhëna/vende të lira pune që përputhen me punën që po kërkoj. Në këtë rast nise fjalinë duke thënë se këto jane vendet e punës, renditi ato dhe gjenero një përshkrim/përmbledhje për secilën duke përmendur të dhënat për punën si psh lokacioni, adresa, aftësitë dhe eksperiencën e nevojshme për tu pranuar si dhe më shumë rëndësi të rikthesh linkun e aplikimit. \n RASTI 2: Në rast se pyetja ime nuk ka të bëjë me gjetjen e një pune,por me gjetjen e informacioneve të ndryshme mbi sektorin e punësimit më kthe një përgjigje në bazë të njohurive tua.\n Për secilin rast më kthe një përgjigje të plotë, me ton profesional.`,
      },
      {
        role: 'assistant',
        content: `${answer}`,
      },
    ];

    fs.appendFileSync(
      'jsonl_file.jsonl',
      `{"messages": ${JSON.stringify(messages)}}\n`,
    );
  }
}
