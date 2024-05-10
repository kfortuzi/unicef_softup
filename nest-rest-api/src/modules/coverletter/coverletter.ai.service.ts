import { Injectable } from '@nestjs/common';
import { UserProfessionSkillsCredentialsInfo } from '../user/user.types';
import {
  ChatCompletionCreateParamsNonStreaming,
  ChatCompletionMessageParam,
} from 'openai/resources';
import { AkpaModels } from '../openai/models';
import { OpenAIService } from '../openai/openai.service';
import { PromptType } from '../openai/promptTypes';
import { jobs } from '@prisma/client';

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
}
