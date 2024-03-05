import { Injectable } from '@nestjs/common';
import { OpenAI, ClientOptions } from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources/chat';
import { AkpaModels } from './models';
@Injectable()
export class OpenAIService {
  private openAI;
  constructor() {
    const configuration: ClientOptions = {
      apiKey: process.env.OPENAI_API_KEY,
    };
    this.openAI = new OpenAI(configuration);
  }
  async generateCompletion(
    userPrompt: ChatCompletionMessageParam[],
    models: AkpaModels,
  ) {
    try {
      const response = await this.openAI.chat.completions.create({
        model: models,
        messages: userPrompt,
        temperature: 0.2,
        //response_format: { type: 'json_object' },
      });

      return response.choices[0];
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      throw new Error('Failed to generate text from OpenAI');
    }
  }

  prepareMessageForAIValidation(
    prompts: string,
    inputObject: any,
    jobObject?: any,
  ): string {
    let message = `${JSON.stringify(inputObject)}`;
    if (jobObject) {
      message += `. ${JSON.stringify(jobObject)}`;
    }
    message += `. ${prompts}`;
    return message;
  }
}
