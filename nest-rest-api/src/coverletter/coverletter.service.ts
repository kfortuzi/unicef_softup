import { Injectable, NotFoundException } from '@nestjs/common';
import { OpenAIService } from '../openai/openai.service';
import { ChatCompletionMessageParam } from 'openai/resources/chat';
import { AkpaModels } from '../openai/models';
import { AkpaPrompts } from '../openai/promptContent';
import { CoverLetterWizardDto } from './dto/cover-letter-wizard.dto';
import { UserService } from 'src/user/user.service';
import { JobSummaryDTO } from 'src/job/dto/job-summary.dto';
import { CoverLetterDto } from './dto/cover-letter-dto';
import { CoverLetterRepository } from './coverletter.repository';
import { JobService } from 'src/job/job.service';

@Injectable()
export class CoverLetterService {
  constructor(
    private openAIService: OpenAIService,
    private userService: UserService,
    private coverLetterRepository: CoverLetterRepository,
    private jobService: JobService,
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
      throw new Error(`${error}`);
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
    try {
      const data = await this.validateAndParseUserInput(userId, wizardData);
      this.assertValidResponse(data);
      const generatedCoverLetter = await this.generateCoverLetter(
        userId,
        wizardData,
      );
      if (generatedCoverLetter !== null) {
        return this.mapOutputData(generatedCoverLetter, userId);
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async generateCoverLetterFromJobPost(userId: string, jobId: string) {
    try {
      const jobData = await this.jobService.findJob(jobId);
      const generatedCoverLetter = await this.generateCoverLetter(
        userId,
        jobData,
      );
      if (generatedCoverLetter !== null) {
        return this.mapOutputData(generatedCoverLetter, userId);
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  mapOutputData(data: string, userId: string) {
    const datas = JSON.parse(data);
    return this.coverLetterRepository.createCoverLetter({
      to: datas.to,
      company: datas.company,
      companyAddress: datas.companyAddress || null,
      content: datas.content || null,
      user: {
        connect: { id: userId },
      },
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
    return this.openAIService.generateCompletion(
      messages,
      AkpaModels.CHAT,
      userId,
      'ValidateCoverLetter',
    );
  }

  private async validateAndParseUserInput(
    userId: string,
    wizardData: CoverLetterWizardDto,
  ): Promise<string> {
    try {
      const filteredWizard = Object.entries(wizardData).reduce(
        (acc, [key, value]) => {
          if (value !== null && value !== undefined && value !== '') {
            (acc as any)[key] = value;
          }
          return acc;
        },
        {} as Partial<CoverLetterWizardDto>,
      );
      const validatedResponse = await this.validateQuestionWizard(
        userId,
        filteredWizard,
      );
      if (!validatedResponse) {
        throw new Error('No data to process');
      }
      return JSON.parse(validatedResponse);
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async generateCoverLetter(
    userId: string,
    input: JobSummaryDTO | CoverLetterWizardDto,
  ): Promise<string | null> {
    const userInput = this.userService.getUserSkillsAsString(userId);
    const messages: ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content: AkpaPrompts.generateCoverLetterPrompt,
      },
      {
        role: 'user',
        content: this.openAIService.prepareMessageForAIValidation(
          AkpaPrompts.generateCoverLetter,
          userInput,
          input,
        ),
      },
    ];
    return this.openAIService.generateCompletion(
      messages,
      AkpaModels.COVER_LETTER,
      userId,
      'CoverLetterWizard',
    );
  }

  private assertValidResponse(
    response: { [key: string]: boolean } | string,
  ): void {
    const errorMessage = Object.entries(response)
      .filter(([isValid]) => !isValid)
      .map(([key]) => `${key} does not meet the required criteria`)
      .join('; ');
    if (errorMessage) {
      throw new Error(errorMessage);
    }
  }
}
