import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { OpenAIService } from '../openai/openai.service';
import {
  ChatCompletionCreateParamsNonStreaming,
  ChatCompletionMessageParam,
} from 'openai/resources/chat';
import { HelperService } from 'src/modules/openai/openai.helper';
import { PromptType } from '../openai/promptTypes';
import { JobService } from 'src/modules/job/job.service';
import { AIModels, AkpaModels } from '../openai/models';
import { AskAssistantDto } from './dto/ask-assistant.dto';
import { getJobTitle } from './functions/getJobTitle';
import { AkpaPrompts } from '../openai/promptContent';
import { UserService } from '../user/user.service';
import { ChatbotHelper } from './chatbot.helper';

@Injectable()
export class ChatbotService {
  constructor(
    private openAIService: OpenAIService,
    private helper: HelperService,
    private chatbotHelper: ChatbotHelper,
    private jobService: JobService,
    private userService: UserService,
  ) {}

  async assistant(userId: string, body: AskAssistantDto) {
    const { firstChatbotConversationMessage, message: userRequest } = body;

    const user = this.userService.findOne(userId);
    if (!user) throw new NotFoundException('User was not found');

    try {
      const chatHistory = firstChatbotConversationMessage
        ? null
        : await this.generateChatHistorySummary(userId);

      const messages: ChatCompletionMessageParam[] = [
        {
          role: 'system',
          content: AkpaPrompts.chatbot,
        },
        chatHistory
          ? {
              role: 'user',
              content: `Kjo eshte nje permbledhje e bisedes me perdoruesin deri ne kete moment: ${chatHistory}. Kjo eshte pyetja e rradhes: ${userRequest}`,
            }
          : {
              role: 'user',
              content: `Perdoruesi do beje pyetjen e tij te pare. Chati nuk ka histori. Tregoji mireseardhje dhe pergjigju me profesionalizem.`,
            },
        {
          role: 'user',
          content: `${userRequest}`,
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
        firstChatbotConversationMessage,
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
            content: `Jepni një përgjigje të pranueshme dhe profesionale për pyetjen. Jepi perdoruesit detaje per te gjitha vendet e lira te punes. Perfshi address, description te punes dhe gjithashtu per cdo pozicion te lire pune bashkengjiti referenceId linkut 'https://www.puna.gov.al/job/'. Linkun beje te klikueshem duke e mbeshtjelle me <a>. Linku do te duket keshtu: <a href="https://www.puna.gov.al/job/{referenceId} target="_blank"">https://www.puna.gov.al/job/{referenceId}</a>. Renditi pozicionet e punes. Cdo pozicion pune duhet te jete i ndare nga tjetri dhe ne rresht te ri. Pergjigju vetem ne shqip dhe ne menyre te permbledhur.`,
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

  async generateChatHistorySummary(userId: string) {
    const conversation =
      await this.openAIService.findLastConversationHistoryPerUser(userId);

    const chatHistory =
      this.chatbotHelper.mergeChatHistoryWithFunctionCalling(conversation);

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
      model: AIModels.gpt_35_turbo_0125,
      response_format: { type: 'text' },
    };

    return await this.openAIService.generateCompletion(
      body,
      userId,
      PromptType.GenerateHistorySummaryForMainChatbot,
    );
  }
}
