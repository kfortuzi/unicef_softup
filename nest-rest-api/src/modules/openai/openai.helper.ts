import { Injectable } from '@nestjs/common';
// import { OpenAIService } from './openai.service';
import { ChatCompletionMessageParam } from 'openai/resources';
import { FAQJson } from './faq';
import * as fs from 'fs';
import { AkpaPrompts } from './promptContent';

@Injectable()
export class HelperService {
  // constructor(private openAIService: OpenAIService) {}

  async loopProfiles() {
    try {
      FAQJson.forEach(({ answer, question }) => {
        this.generatefileJsonl(question, answer);
      });
    } catch (error) {
      console.log(error);
    }
  }

  async generatefileJsonl(question: string, answer: string) {
    const messages: ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content: AkpaPrompts.chatbot,
      },
      {
        role: 'user',
        content: question,
      },
      {
        role: 'assistant',
        content: answer,
      },
    ];

    fs.appendFileSync(
      'jsonl_file',
      `{"messages": ${JSON.stringify(messages)}}\n`,
    );
  }
}
