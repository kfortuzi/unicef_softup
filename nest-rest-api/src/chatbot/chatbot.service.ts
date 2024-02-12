import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class ChatbotService {
  //TODO: pass it to .env file as a var
  private readonly openAiUrl: string = 'https://api.openai.com/v1/completions';

  constructor(private configService: ConfigService) {}

  async sendMessage(prompt: string): Promise<string> {
    const apiKey = this.configService.get<string>('OPENAI_API_KEY');
    const response = await axios.post(
      this.openAiUrl,
      {
        model: 'gpt-4-vision-preview', // text-davinci-004
        prompt: prompt,
        temperature: 0.4,
        max_tokens: 800,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      },
    );

    return response.data.choices[0].text.trim();
  }
}
