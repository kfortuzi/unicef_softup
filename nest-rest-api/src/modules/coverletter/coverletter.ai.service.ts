import { Injectable } from '@nestjs/common';
import { UserProfessionSkillsCredentialsInfo } from '../user/user.types';
import {
  ChatCompletionCreateParamsNonStreaming,
  ChatCompletionMessageParam,
} from 'openai/resources';
import { AkpaModels } from '../openai/models';
import { OpenAIService } from '../openai/openai.service';
import { PromptType } from '../openai/promptTypes';
import { jobs, users } from '@prisma/client';

@Injectable()
export class CoverLetterAIService {
  constructor(private openAIService: OpenAIService) {}

  async generateCoverLetterBasedOnJob(
    userInfo: UserProfessionSkillsCredentialsInfo,
    userId: string,
    job: jobs,
  ) {
    const messages: ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content: `Je nje asistent i cili gjeneron nje leter motivimi bazuar ne pershkrimin e nje vendi pune dhe profilit te perdoruesit. Pergjigja duhet te jete nje json qe duket keshtu: {\\n  \"to\": \"String\",\\n  \"company\": \"String\",\\n  \"companyAddress\":  \"String\",\\n    \\n  \"content\": \"String\"\\n} . Letra e motivimit duhet te jete me patjeter ne gjuhen shqipe.`,
      },
      {
        role: 'user',
        content: `Ky eshte vendi i punes per te cilin dua te pregatitesh letren e motivimit : ${JSON.stringify(
          job,
        )}. Ndersa keto jane disa informacione lidhur me profilin e perdoruesit : ${JSON.stringify(
          userInfo,
        )}. Letra e motivimit duhet te jete 250 deri ne 400 fjale. Mundohu te pershtatesh profilin e perdoruesit me punen ne te cilin ai deshiron te punoje. Perqendrohu te aftesite e perbashketa qe duhen ne pune dhe atyre qe ka perdoruesi. Letra duhet te filloje me fjalen "I/E nderuar" dhe te mbaroje me "Me respekt {firstName lastname}" ku firstNama dhe lastName jane emri dhe mbiemri i perdoruesit. Pergjigju vetem me strukturen e duhur te json dhe cdo vlere e json duhet te jete ne gjuhen shqipe.`,
      },
    ];

    const body: ChatCompletionCreateParamsNonStreaming = {
      messages,
      model: AkpaModels.COVER_LETTER,
      response_format: { type: 'json_object' },
    };

    return this.openAIService.generateCompletion(
      body,
      userId,
      PromptType.CoverLetterWizard,
    );
  }

  async autogenerateCoverLetter(
    user: users,
    content: string,
    job: jobs | null,
  ) {
    const messages: ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content:
          'Je nje chatbot i cili permireson permbajtjen e letres sime te motivimit. Pergjigja duhet te jete me patjeter permbajtja e nje letre motivimi dhe  duhet te jete patjeter ne gjuhen shqipe.',
      },
      job
        ? {
            role: 'user',
            content: `Kjo eshte letra ime aktuale e motivimit : ${content}.Ky eshte profili im : ${JSON.stringify(
              user,
            )}. Permireso letren time te motivimit. Mund te perdoresh profilin tim per tu bazuar ne gjenerimin e letres. Permend pervojat, eksperiencat dhe aftesite e mia me te rendesishme. Perdor nje ton profesional dhe akademik.`,
          }
        : {
            role: 'user',
            content: `Kjo eshte letra ime aktuale e motivimit : ${content}.Ky eshte profili im : ${JSON.stringify(
              user,
            )}, ndersa kjo eshte puna per te cilen po e gjeneroj letren e motivimit : ${job}. Permireso letren time te motivimit. Gjej pikat e perbashketa midis aftesive te mia te punes dhe aftesive qe kerkohen ne pune. Permendi ato ne letren e motivimit. Perdor nje ton profesional dhe akademik.`,
          },
    ];

    const body: ChatCompletionCreateParamsNonStreaming = {
      messages,
      model: AkpaModels.COVER_LETTER,
    };

    return this.openAIService.generateCompletion(
      body,
      user.id,
      PromptType.CoverLetter,
    );
  }
}
