import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { OpenAIService } from '../openai/openai.service';
import {
  ChatCompletionCreateParamsNonStreaming,
  ChatCompletionMessageParam,
} from 'openai/resources/chat';
import { AkpaModels } from '../openai/models';
import { AkpaPrompts } from '../openai/promptContent';
import { CoverLetterWizardDto } from './dto/cover-letter-wizard.dto';
import { UserService } from 'src/modules/user/user.service';
import { JobSummaryDTO } from 'src/modules/job/dto/job-summary.dto';
import { CoverLetterDto } from './dto/cover-letter-dto';
import { CoverLetterRepository } from './coverletter.repository';
import { JobService } from 'src/modules/job/job.service';
import { WizardService } from 'src/modules/wizard/wizard.service';
import { PromptType } from 'src/modules/openai/promptTypes';
import { SourceType } from '@prisma/client';
import { extractJSON } from 'src/helpers/parser';
import { MessageDto } from '../chatbot/dto/message.dto';
import { AutoGenerateCoverLetterDto } from './dto/cover-letter-autogenerate.dto';

@Injectable()
export class CoverLetterService {
  constructor(
    private openAIService: OpenAIService,
    private userService: UserService,
    private coverLetterRepository: CoverLetterRepository,
    private jobService: JobService,
    private wizardService: WizardService,
  ) {}

  async createCoverLetter(userId: string, data: CoverLetterDto) {
    try {
      const user = this.userService.getProfile(userId);
      if (!user) throw new NotFoundException({ message: 'User not found!' });

      return this.coverLetterRepository.createCoverLetter({
        to: data.to,
        company: data.company,
        companyAddress: data.companyAddress ? data.companyAddress : null,
        content: data.content ? data.content : null,
        user: {
          connect: { id: userId },
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async findAllCoverLetters(userId: string) {
    return this.coverLetterRepository.findAll(userId);
  }

  async findCoverLetterById(id: string, userId: string) {
    const coverLetter = await this.coverLetterRepository.findOne(id, userId);
    if (!coverLetter) {
      throw new NotFoundException(`Cover letter with ID "${id}" not found`);
    }
    return coverLetter;
  }

  async updateCoverLetter(id: string, userId: string, data: CoverLetterDto) {
    await this.findCoverLetterById(id, userId);
    return this.coverLetterRepository.updateResume(id, data);
  }

  async deleteCoverLetter(id: string, userId: string) {
    await this.findCoverLetterById(id, userId);
    return this.coverLetterRepository.softDelete(id);
  }

  async generateCoverLetterFromWizard(
    userId: string,
    wizardData: CoverLetterWizardDto,
  ) {
    const user = await this.userService.findOne(userId);
    if (!user) throw new NotFoundException('User was not found');

    const generatedCoverLetter = await this.generateCoverLetter(
      userId,
      wizardData,
      'json_object',
    );

    if (!generatedCoverLetter)
      throw new InternalServerErrorException(
        'The cover letter could not be generated!',
      );

    this.wizardService.saveWizardAnswers(
      wizardData,
      userId,
      SourceType.CoverLetter,
    );
    return this.mapOutputData(generatedCoverLetter, userId);
  }

  async generateCoverLetterFromJobPost(userId: string, jobId: string) {
    try {
      const jobData = await this.jobService.findJob(jobId);
      const existingCoverLetter =
        await this.coverLetterRepository.getJobCoverLetter(userId, jobId);
      if (existingCoverLetter)
        throw new UnprocessableEntityException({
          errorCode: 422,
          message: 'Cover letter already exists!',
        });
      const generatedCoverLetter = await this.generateCoverLetter(
        userId,
        jobData,
        'json_object',
      );
      if (generatedCoverLetter !== null) {
        return this.mapOutputData(generatedCoverLetter, userId, jobId);
      }
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  mapOutputData(data: string, userId: string, jobId?: string) {
    const coverLetter: CoverLetterDto = extractJSON(data);

    return this.coverLetterRepository.createCoverLetter({
      to: coverLetter.to,
      company: coverLetter.company,
      companyAddress: coverLetter.companyAddress || null,
      content: coverLetter.content || null,
      user: {
        connect: { id: userId },
      },
      job: jobId
        ? {
            connect: { id: jobId },
          }
        : undefined,
    });
  }

  async validateQuestionWizard(
    userId: string,
    wizardData: any,
  ): Promise<string | null> {
    const messages: ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content: AkpaPrompts.coverLetterValidatePrompt,
      },
      {
        role: 'user',
        content: `Here is the user answeres \n ${JSON.stringify(
          wizardData,
        )} \n ${AkpaPrompts.coverLetterValidateUserPrompt} `,
      },
    ];

    const body: ChatCompletionCreateParamsNonStreaming = {
      messages,
      model: AkpaModels.CHAT,
    };

    return this.openAIService.generateCompletion(
      body,
      userId,
      PromptType.ValidateCoverLetter,
    );
  }

  async generateCoverLetter(
    userId: string,
    input: JobSummaryDTO | CoverLetterWizardDto,
    responseType: any,
  ): Promise<string | null> {
    const userInput = await this.userService.getUserSkillsAsString(userId);
    const messages: ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content: AkpaPrompts.generateCoverLetterPrompt,
      },
      {
        role: 'user',
        content: this.openAIService.prepareMessageForAIValidation(
          AkpaPrompts.generateCoverLetter,
          input,
          userInput,
        ),
      },
    ];

    const body: ChatCompletionCreateParamsNonStreaming = {
      messages,
      model: AkpaModels.COVER_LETTER,
      response_format: { type: responseType },
    };

    return this.openAIService.generateCompletion(
      body,
      userId,
      PromptType.CoverLetterWizard,
    );
  }

  async askWizardCoverLetter(
    userId: string,
    userRequest: MessageDto,
  ): Promise<string | null> {
    try {
      const messages: ChatCompletionMessageParam[] = [
        {
          role: 'system',
          content: AkpaPrompts.coverLetterWizard,
        },
        {
          role: 'user',
          content: userRequest.message,
        },
      ];

      if (userRequest.content) {
        messages.push({
          role: 'user',
          content: userRequest.content,
        });
      }

      const body: ChatCompletionCreateParamsNonStreaming = {
        messages,
        model: AkpaModels.COVER_LETTER,
      };

      return this.openAIService.generateCompletion(
        body,
        userId,
        PromptType.CoverLetter,
      );
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      throw new InternalServerErrorException(
        'Failed to generate text from OpenAI',
      );
    }
  }

  async autogenerateCoverLetter(
    userId: string,
    userRequest: AutoGenerateCoverLetterDto,
  ) {
    try {
      const messages: ChatCompletionMessageParam[] = [
        {
          role: 'system',
          content: AkpaPrompts.coverLetterWizard,
        },
        {
          role: 'user',
          content: userRequest.content,
        },
      ];

      const body: ChatCompletionCreateParamsNonStreaming = {
        messages,
        model: AkpaModels.COVER_LETTER,
      };

      return this.openAIService.generateCompletion(
        body,
        userId,
        PromptType.CoverLetter,
      );
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      throw new InternalServerErrorException(
        'Failed to generate text from OpenAI',
      );
    }
  }
}
