import { Injectable, NotFoundException } from '@nestjs/common';
import { OpenAIService } from '../openai/openai.service';
import { ChatCompletionMessageParam } from 'openai/resources/chat';
import { AkpaModels } from '../openai/models';
import { AkpaPrompts } from '../openai/promptContent';
import { ResumeRepository } from './resume.repository';
import { Prisma } from '@prisma/client';
import { UserService } from 'src/user/user.service';
import { ExperienceDto, ResumeDto } from './dto/resume.dto';
import { JobService } from 'src/job/job.service';
import { JobSummaryDTO } from 'src/job/dto/job-summary.dto';

@Injectable()
export class ResumeService {
  constructor(
    private openAIService: OpenAIService,
    private resumeRepository: ResumeRepository,
    private userService: UserService,
    private jobService: JobService,
  ) {}

  async createResume(userId: string, data: ResumeDto, jobId?: string) {
    try {
      const user = this.userService.getProfile(userId);
      if (!user) throw new NotFoundException({ message: 'User not found!' });
      const resumeInput = this.mapInputData(userId, data, jobId);
      return this.resumeRepository.createResume(resumeInput);
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  private mapInputData(
    userId: string,
    data: ResumeDto,
    jobId?: string,
  ): Prisma.resumesCreateInput {
    return {
      email: data.email,
      firstName: data.firstName ? data.firstName : null,
      lastName: data.lastName ? data.lastName : null,
      profilePicture: data.profilePicture ? data.profilePicture : null,
      nationality: data.nationality ? data.nationality : null,
      linkedinUrl: data.linkedinUrl ? data.linkedinUrl : null,
      location: data.location ? data.location : null,
      phoneNumber: data.phoneNumber ? data.phoneNumber : null,
      summary: data.summary ? data.summary : null,
      educations: data.educations
        ? data.educations.map((obj) => this.toString(obj))
        : undefined,
      experiences: data.experiences
        ? data.experiences.map((obj) => this.toString(obj))
        : undefined,
      languages: data.languages
        ? data.languages.map((obj) => this.toString(obj))
        : undefined,
      digitalSkills: data.digitalSkills ? data.digitalSkills : null,
      softSkills: data.softSkills ? data.softSkills : null,
      hobbies: data.hobbies ? data.hobbies : null,
      certificates: data.certificates
        ? data.certificates.map((obj) => this.toString(obj))
        : undefined,
      volunteering: data.volunteering
        ? data.volunteering.map((obj) => this.toString(obj))
        : undefined,
      publications: data.publications
        ? data.publications.map((obj) => this.toString(obj))
        : undefined,
      drivingLicense: data.drivingLicense ? data.drivingLicense : null,
      user: {
        connect: { id: userId },
      },
      job: jobId
        ? {
            connect: { id: jobId },
          }
        : undefined,
    };
  }

  async findAllResumes(userId: string) {
    return this.resumeRepository.findAll(userId);
  }

  async findResumeById(id: string, userId: string) {
    const resume = await this.resumeRepository.findOne(id, userId);
    if (!resume) {
      throw new NotFoundException(`Resume with ID "${id}" not found`);
    }
    return resume;
  }

  async updateResume(id: string, userId: string, data: ResumeDto) {
    await this.findResumeById(id, userId);
    const dataUpdate = this.mapInputData(userId, data);
    return this.resumeRepository.updateResume(id, dataUpdate);
  }

  async deleteResume(id: string, userId: string) {
    const resume = await this.findResumeById(id, userId);
    if (resume.referenceId == null) {
      throw new Error(`User default resume can not be deleted`);
    }
    return this.resumeRepository.softDelete(id);
  }

  //TODO: Change the input type
  async resumeGenerationFromWizard(
    userId: string,
    userInput: ResumeDto,
  ): Promise<string | null | undefined> {
    try {
      const validatedJson = await this.validateQuestionWizard(
        userId,
        userInput,
      );

      if (validatedJson) {
        const data = JSON.parse(validatedJson);
        const isValidResponese = this.evaluateResponse(data);
        if (isValidResponese) {
          return this.generateResumeJson(userId, userInput);
        }
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  //TODO: test the post of new resume
  async resumeGenerationFromJob(userId: string, jobId: string) {
    try {
      const resumeData = await this.resumeRepository.findUserResume(
        userId,
        null,
      );
      if (!resumeData)
        throw new NotFoundException({ message: 'Resume not found!' });

      const jobData = await this.jobService.findJob(jobId);
      const userExperience = await this.getUserExperiences(userId);
      const summary = await this.generateSummary(
        userId,
        userExperience as any,
        jobData,
      );
      if (userExperience) {
        /*userExperience = userExperience.forEach((experience: any) => {
          if (experience.responsibilities) {
            experience.responsibilities = this.generateResponsibility(
              userId,
              experience,
            );
          }
        });*/
      }

      resumeData.referenceId = jobId;
      // resumeData.experiences = userExperience;
      //this.resumeRepository.createResume
      return {
        email: resumeData.email,
        firstName: resumeData.firstName,
        lastName: resumeData.lastName,
        profilePicture: resumeData.profilePicture,
        nationality: resumeData.nationality,
        linkedinUrl: resumeData.linkedinUrl,
        location: resumeData.location,
        phoneNumber: resumeData.phoneNumber,
        educations: resumeData.educations,
        summary: summary,
        experiences: resumeData.experiences,
        languages: resumeData.languages,
        digitalSkills: resumeData.digitalSkills,
        softSkills: resumeData.softSkills,
        hobbies: resumeData.hobbies,
        certificates: resumeData.certificates,
        volunteering: resumeData.volunteering,
        publications: resumeData.publications,
        drivingLicense: resumeData.drivingLicense,
        job: {
          connect: { id: jobId },
        },
        user: {
          connect: { id: userId },
        },
      };
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async validateQuestionWizard(
    userId: string,
    userInput: ResumeDto,
  ): Promise<string | null> {
    const messages: ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content: AkpaPrompts.resumeValidatePrompt,
      },
      {
        role: 'user',
        content: this.openAIService.prepareMessageForAIValidation(
          AkpaPrompts.resumeValidateUserPrompt,
          userInput,
        ),
      },
    ];
    return this.openAIService.generateCompletion(
      messages,
      AkpaModels.IS_VALID_ANSWER,
      userId,
      'ValidateResume',
    );
  }

  async generateResumeJson(
    userId: string,
    userInput: ResumeDto,
  ): Promise<string | null> {
    const messages: ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content: AkpaPrompts.generateResume,
      },
      {
        role: 'user',
        content: this.openAIService.prepareMessageForAIValidation(
          AkpaPrompts.generateUserPrompt,
          userInput,
        ),
      },
    ];
    return this.openAIService.generateCompletion(
      messages,
      AkpaModels.CHAT,
      userId,
      'ResumeWizard',
    );
  }

  private evaluateResponse(response: { [key: string]: boolean }): boolean {
    if (response) {
      return this.checkUserResponses(response);
    } else {
      throw new Error('Invalid response structure.');
    }
  }

  private checkUserResponses(criteria: { [key: string]: boolean }): boolean {
    let errorMessage = '';
    for (const [key, value] of Object.entries(criteria)) {
      if (!value) {
        errorMessage += ` ${key} does not meet the required criteria;`;
      }
    }
    if (errorMessage) {
      throw new Error(errorMessage.trim());
    }
    return true;
  }

  async getUserExperiences(userId: string) {
    const userExperience =
      await this.resumeRepository.getUserResumeExperiences(userId);
    if (!userExperience)
      throw new NotFoundException({ message: 'User`s experience not found!' });
    return userExperience;
  }

  async generateSummary(
    userId: string,
    userInput: ExperienceDto[],
    jobDetails?: JobSummaryDTO,
  ): Promise<string | null> {
    try {
      const yearsOfExperience = await this.calculateYearsOfExperience(
        userId,
        userInput,
      );
      let systemPrompt: string = AkpaPrompts.generateSummaryWithoutExperience;
      if (yearsOfExperience > 0) {
        systemPrompt = `${AkpaPrompts.generateSummary}. ${yearsOfExperience}`;
      }
      let userMessage = this.toString(userInput);
      if (jobDetails) {
        userMessage += ` ${this.toString(jobDetails)}`;
      }
      const messages: ChatCompletionMessageParam[] = [
        {
          role: 'system',
          content: systemPrompt,
        },
        {
          role: 'user',
          content: userMessage,
        },
      ];
      return this.openAIService.generateCompletion(
        messages,
        AkpaModels.CHAT,
        userId,
        'Summary',
      );
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async calculateYearsOfExperience(
    userId: string,
    userInput: string | ExperienceDto[],
  ): Promise<number> {
    let yearsOfExperience = 0;
    const messages: ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content: AkpaPrompts.calculateYearsOfExperience,
      },
      {
        role: 'user',
        content: `${this.toString(userInput)}`,
      },
    ];
    const response = await this.openAIService.generateCompletion(
      messages,
      AkpaModels.CHAT,
      userId,
      'YearsOfExperience',
    );
    if (response) {
      yearsOfExperience = JSON.parse(response).Total;
    }
    return yearsOfExperience;
  }

  async generateResponsibility(
    userId: string,
    userInput: string | ExperienceDto,
  ): Promise<string | null> {
    try {
      const messages: ChatCompletionMessageParam[] = [
        {
          role: 'system',
          content: AkpaPrompts.generateResponsibility,
        },
        {
          role: 'user',
          content: `${this.toString(userInput)}`,
        },
      ];

      return this.openAIService.generateCompletion(
        messages,
        AkpaModels.CHAT,
        userId,
        'Responsibility',
      );
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  toString(input: any): string {
    return JSON.stringify(input);
  }
}
