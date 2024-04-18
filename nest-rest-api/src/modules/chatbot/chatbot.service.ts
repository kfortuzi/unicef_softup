import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { OpenAIService } from '../openai/openai.service';
import {
  ChatCompletionCreateParamsNonStreaming,
  ChatCompletionMessageParam,
} from 'openai/resources/chat';
import { AkpaPrompts } from '../openai/promptContent';
import { HelperService } from 'src/modules/openai/openai.helper';
import { PromptType } from '../openai/promptTypes';
import { JobService } from 'src/modules/job/job.service';
import { AkpaModels } from '../openai/models';

@Injectable()
export class ChatbotService {
  constructor(
    private openAIService: OpenAIService,
    private helper: HelperService,
    private jobService: JobService,
  ) {}

  async assistant(userId: string, userRequest: string) {
    try {
      const getJobTitle = {
        name: 'getJobTitle',
        description:
          'Ekstrakto titullin e punes nga pyetja e perdoruesit nese perdoruesi deshiron te dije informacione mbi nje vend te lire pune',
        parameters: {
          type: 'object',
          properties: {
            jobTitle: {
              type: 'string',
              description: 'Titulli i punes ne gjuhen shqipe.',
            },
          },
          required: ['jobTitle'],
        },
      };

      const messages: ChatCompletionMessageParam[] = [
        {
          role: 'system',
          content: AkpaPrompts.chatbot,
        },
        {
          role: 'user',
          content: userRequest,
        },
      ];

      const body: ChatCompletionCreateParamsNonStreaming = {
        messages,
        model: AkpaModels.MAIN_CHAT,
        functions: [getJobTitle],
        function_call: 'auto',
      };

      const response = await this.openAIService.generateCompletion(
        body,
        userId,
        PromptType.MainChat,
      );

      if (response?.charAt(0) === '{') {
        const job: { jobTitle: string } = JSON.parse(response);
        const { jobTitle } = job;

        const jobAnswer = await this.respondBasedOnJobContext(
          jobTitle,
          userRequest,
          userId,
        );
        return { message: jobAnswer };
      }

      return { message: response };
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      throw new InternalServerErrorException(
        'Failed to generate text from OpenAI',
      );
    }
  }

  async completeChatbotFineTunign() {
    return this.helper.loopProfiles();
  }

  async respondBasedOnJobContext(
    title: string,
    question: string,
    userId: string,
  ): Promise<string> {
    const jobs = await this.jobService.getLatestJobsByTitle(title);
    const NUMBER_OF_RELEVANT_JOBS = 3;

    const mostRelevantJobs = jobs.slice(
      0,
      Math.min(NUMBER_OF_RELEVANT_JOBS, jobs.length),
    );
    const messages: ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content:
          'Ju jeni një chatbot që përgjigjet një përdoruesi që pyet për pozicionet e punës të hapura të mundshme. Pozicionet relevante për atë përdorues do të jepen si kontekst i bisedës.',
      },
      {
        role: 'user',
        content: `Këtu është pyetja e përdoruesit: ${question}. Këtu janë deri në 3 punët më të rëndësishme të lidhura me pyetjen (konteksti): ${JSON.stringify(
          mostRelevantJobs,
        )} `,
      },
      !!mostRelevantJobs.length
        ? {
            role: 'user',
            content: `Jepni një përgjigje të pranueshme dhe profesionale për pyetjen. Jepi perdoruesit detaje per te gjitha vendet e lira te punes. Perfshi address dhe description te punes. Pergjigju vetem ne shqip dhe ne menyre te permbledhur.`,
          }
        : {
            role: 'user',
            content: `Jepni një përgjigje të pranueshme dhe profesionale për pyetjen.  Pergjigju perdoruesit duke i thene qe aktualisht nuk ka asnje vend te lire pune te regjistruar ne platforme per kete profesion. Pergjigju vetem ne shqip.`,
          },
    ];

    const body: ChatCompletionCreateParamsNonStreaming = {
      messages,
      model: AkpaModels.MAIN_CHAT,
    };

    const response = await this.openAIService.generateCompletion(
      body,
      userId,
      PromptType.MainChat,
    );
    if (!response)
      throw new InternalServerErrorException('No response generated from AI');
    return response;
  }
}
