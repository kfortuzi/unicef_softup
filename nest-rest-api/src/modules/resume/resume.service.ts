import {
  BadRequestException,
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
import { ResumeRepository } from './resume.repository';
import { Prisma, SourceType } from '@prisma/client';
import { UserService } from 'src/modules/user/user.service';
import { ExperienceDto, ResumeDto } from './dto/resume.dto';
import { JobService } from 'src/modules/job/job.service';
import { JobSummaryDTO } from 'src/modules/job/dto/job-summary.dto';
import { ResumeWizardDto } from './dto/resume-wizard.dto';
import { JsonValue } from '@prisma/client/runtime/library';
import { WizardService } from 'src/modules/wizard/wizard.service';
import { S3Service } from 'src/modules/s3/s3.service';
import { PromptType } from 'src/modules/openai/promptTypes';
import { extractJSON } from 'src/helpers/parser';
import { extractInformationFromAnswers } from './extractInformationFromAnswers';
import { prepareResumeBody } from './resume.helpers';

@Injectable()
export class ResumeService {
  constructor(
    private openAIService: OpenAIService,
    private resumeRepository: ResumeRepository,
    private userService: UserService,
    private jobService: JobService,
    private wizardService: WizardService,
    private s3Service: S3Service,
  ) {}

  async createResume(userId: string, data: ResumeDto, jobId?: string) {
    try {
      const user = await this.userService.findOne(userId);
      if (!user) throw new NotFoundException({ message: 'User not found!' });

      const resumeInput = this.mapInputData(userId, data, user.email, jobId);
      return this.resumeRepository.createResume(resumeInput);
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  private mapInputData(
    userId: string,
    data: ResumeDto,
    email: string,
    jobId?: string,
  ): Prisma.resumesCreateInput {
    return {
      email: data.email ? data.email : email,
      firstName: data.firstName ? data.firstName : null,
      lastName: data.lastName ? data.lastName : null,
      profilePicture: data.profilePicture ? data.profilePicture : null,
      nationality: data.nationality ? data.nationality : null,
      linkedinUrl: data.linkedinUrl ? data.linkedinUrl : null,
      location: data.location ? data.location : null,
      phoneNumber: data.phoneNumber ? data.phoneNumber : null,
      summary: data.summary ? data.summary : null,
      educations: data.educations
        ? (data.educations as unknown as Prisma.JsonObject)
        : undefined,
      experiences: data.experiences
        ? (data.experiences as unknown as Prisma.JsonObject)
        : undefined,
      languages: data.languages
        ? (data.languages as unknown as Prisma.JsonObject)
        : undefined,
      digitalSkills: data?.digitalSkills?.length ? data.digitalSkills : [],
      technicalSkills: data?.technicalSkills?.length
        ? data.technicalSkills
        : [],
      softSkills: data?.softSkills?.length ? data.softSkills : [],
      hobbies: data?.hobbies?.length ? data.hobbies : [],
      certificates: data.certificates
        ? (data.certificates as unknown as Prisma.JsonObject)
        : undefined,
      volunteering: data.volunteering
        ? (data.volunteering as unknown as Prisma.JsonObject)
        : undefined,
      publications: data.publications
        ? (data.publications as unknown as Prisma.JsonObject)
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
    const resumes = await this.resumeRepository.findAll(userId);
    if (!resumes || resumes.length === 0) {
      throw new NotFoundException(`Resumes for user not found`);
    }

    const updatedResumes = await Promise.all(
      resumes.map(async (resume) => {
        if (resume.profilePicture) {
          const resumePicture = await this.resumePhotogeneratePresignedUrl(
            resume.profilePicture,
          );
          return { ...resume, profilePicture: resumePicture };
        }
        return resume;
      }),
    );

    return updatedResumes;
  }

  async findResumeById(id: string, userId: string) {
    const resume = await this.resumeRepository.findOne(id, userId);
    if (!resume) {
      throw new NotFoundException(`Resume with ID "${id}" not found`);
    }
    if (resume.profilePicture) {
      resume.profilePicture = await this.resumePhotogeneratePresignedUrl(
        resume.profilePicture,
      );
    }
    return resume;
  }

  resumePhotogeneratePresignedUrl(photoKey: string) {
    return this.s3Service.generatePresignedUrl(photoKey);
  }

  async updateResume(id: string, userId: string, data: ResumeDto) {
    try {
      const resume = await this.findResumeById(id, userId);
      return this.resumeRepository.updateResume(id, {
        email: data.email || resume.email,
        firstName: data.firstName || resume.firstName,
        lastName: data.lastName || resume.lastName,
        nationality: data.nationality || resume.nationality,
        linkedinUrl: data.linkedinUrl || resume.linkedinUrl,
        location: data.location || resume.location,
        phoneNumber: data.phoneNumber || resume.phoneNumber,
        summary: data.summary || resume.summary,
        educations:
          (data.educations as unknown as Prisma.JsonObject) ||
          (resume.educations as Prisma.JsonObject),
        experiences:
          (data.experiences as unknown as Prisma.JsonObject) ||
          (resume.experiences as Prisma.JsonObject),
        languages:
          (data.languages as unknown as Prisma.JsonObject) ||
          (resume.languages as Prisma.JsonObject),
        digitalSkills: data.digitalSkills || resume.digitalSkills,
        technicalSkills: data.technicalSkills || resume.technicalSkills,
        softSkills: data.softSkills || resume.softSkills,
        hobbies: data.hobbies || resume.hobbies,
        certificates:
          (data.certificates as unknown as Prisma.JsonObject) ||
          (resume.certificates as Prisma.JsonObject),
        volunteering:
          (data.volunteering as unknown as Prisma.JsonObject) ||
          (resume.volunteering as Prisma.JsonObject),
        publications:
          (data.publications as unknown as Prisma.JsonObject) ||
          (resume.publications as Prisma.JsonObject),
        drivingLicense: data.drivingLicense || resume.drivingLicense,
        user: {
          connect: { id: userId },
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async deleteResume(id: string, userId: string) {
    const resume = await this.findResumeById(id, userId);
    if (resume.referenceId == null) {
      throw new InternalServerErrorException(
        `User default resume can not be deleted`,
      );
    }
    return this.resumeRepository.softDelete(id);
  }

  async resumeGenerationFromWizard(userId: string, userInput: ResumeWizardDto) {
    const user = await this.userService.findOne(userId);
    if (!user) throw new NotFoundException('User not found!');

    const baseResume = await this.resumeRepository.findUserResume(userId, null);
    if (baseResume)
      throw new BadRequestException('A base resume already exists!');

    const generatedResume = await this.generateResumeJson(userId, userInput);
    if (!generatedResume)
      throw new InternalServerErrorException(
        'OpenAI failed to generate content!',
      );
    const resume: ResumeDto = extractJSON(generatedResume);
    const resumeBody = prepareResumeBody(userId, resume);

    await Promise.all([
      this.wizardService.saveWizardAnswers(
        userInput,
        userId,
        SourceType.Resume,
      ),
      this.resumeRepository.createResume(resumeBody),
    ]);

    return { ...resume, email: user?.email || '' };
  }

  async resumeGenerationFromJob(userId: string, jobId: string) {
    const user = await this.userService.findOne(userId);
    if (!user) throw new NotFoundException({ message: 'User not found!' });

    const resumeData = await this.resumeRepository.findUserResume(userId, null);

    if (!resumeData)
      throw new NotFoundException({ message: 'Resume not found!' });
    const jobData = await this.jobService.findJob(jobId);
    const existingResume = await this.resumeRepository.findUserResume(
      userId,
      jobId,
    );
    if (existingResume)
      throw new UnprocessableEntityException('Resume already exists!');
    const userExperience = await this.getUserExperiences(userId);
    const updatedUserExperiences = await this.enhanceResponsibility(
      userExperience,
      userId,
    );

    const summary = await this.generateSummary(
      userId,
      userExperience as any,
      jobData,
    );

    resumeData.referenceId = jobId;
    resumeData.experiences = updatedUserExperiences as unknown as JsonValue;
    return this.resumeRepository.createResume({
      email: resumeData.email,
      firstName: resumeData.firstName,
      lastName: resumeData.lastName,
      profilePicture: resumeData.profilePicture,
      nationality: resumeData.nationality,
      linkedinUrl: resumeData.linkedinUrl,
      location: resumeData.location,
      phoneNumber: resumeData.phoneNumber,
      educations: resumeData.educations || undefined,
      summary: summary,
      experiences: resumeData.experiences || undefined,
      languages: resumeData.languages || undefined,
      digitalSkills: resumeData.digitalSkills,
      technicalSkills: resumeData.technicalSkills,
      softSkills: resumeData.softSkills,
      hobbies: resumeData.hobbies,
      certificates: resumeData.certificates || undefined,
      volunteering: resumeData.volunteering || undefined,
      publications: resumeData.publications || undefined,
      drivingLicense: resumeData.drivingLicense,
      job: {
        connect: { id: jobId },
      },
      user: {
        connect: { id: userId },
      },
    });
  }

  async enhanceResponsibility(
    userExperiences: any,
    userId: string,
  ): Promise<ExperienceDto[]> {
    return await Promise.all(
      userExperiences.map(async (experience: any) => {
        const data: ExperienceDto = experience;
        if (data.responsibilities) {
          const enhancedResponsibility = await this.generateResponsibility(
            userId,
            data,
          );
          if (enhancedResponsibility)
            data.responsibilities = enhancedResponsibility;
        }
        return data;
      }),
    );
  }

  async mapResumeOutputdata(data: string, userId: string) {
    const userData = await this.userService.findOne(userId);
    if (userData) {
      const datas = JSON.parse(data);
      return this.resumeRepository.createResume({
        firstName: userData.firstName || null,
        lastName: userData.lastName,
        email: userData.email,
        phoneNumber: userData.profession || null,
        experiences: datas.experiences || null,
        educations: datas.educations || null,
        languages: datas.languages || null,
        summary: datas.summary || null,
        digitalSkills: datas.digitalSkills || null,
        technicalSkills: datas.technicalSkills || null,
        softSkills: datas.softSkills || null,
        hobbies: datas.hobbies || null,
        certificates: datas.certificates || null,
        volunteering: datas.volunteering || null,
        publications: datas.publications || null,
        drivingLicense: datas.drivingLicense || null,
        user: {
          connect: { id: userId },
        },
      });
    }
  }

  async validateQuestionWizard(
    userId: string,
    userInput: ResumeWizardDto,
  ): Promise<string | null> {
    try {
      const filteredWizard = Object.entries(userInput).reduce(
        (acc, [key, value]) => {
          if (value !== null && value !== undefined && value !== '') {
            (acc as any)[key] = value;
          }
          return acc;
        },
        {} as Partial<ResumeWizardDto>,
      );

      const messages: ChatCompletionMessageParam[] = [
        {
          role: 'system',
          content: AkpaPrompts.resumeValidatePrompt,
        },
        {
          role: 'user',
          content: this.openAIService.prepareMessageForAIValidation(
            AkpaPrompts.resumeValidateUserPrompt,
            filteredWizard,
          ),
        },
      ];

      const body: ChatCompletionCreateParamsNonStreaming = {
        messages,
        model: AkpaModels.IS_VALID_ANSWER,
      };
      const validatedResponse = await this.openAIService.generateCompletion(
        body,
        userId,
        PromptType.ValidateResume,
      );

      if (!validatedResponse) {
        throw new InternalServerErrorException('No data to process');
      }

      return JSON.parse(validatedResponse);
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async generateResumeJson(
    userId: string,
    userInput: ResumeDto | ResumeWizardDto,
  ) {
    const messages: ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content:
          'You are a helpful resume assistant that formats and extracts all the necessary resume data from my interview answers that will be in albanian language. You never generate fictive resume information.',
      },
      {
        role: 'user',
        content: `The interviewer asked me questions chronologically about: experiences, educations, native language, other languages, technical/digital skills, soft skills, hobbies and the last one was a summary. Here are my interview answers: ${JSON.stringify(
          userInput,
        )}`,
      },
      {
        role: 'assistant',
        content: `OK, got it. How can I help you?`,
      },
      {
        role: 'user',
        content: `Reply only with the response nothing else. The response must be a json. Do not change, add or remove any information of the sections. Replace double quotes inside the values of json (not the starting and ending double quotes) with single quotes. The json response must have this exact interface: {email: string;firstName: string;lastName: string; profilePicture: string;nationality: string; linkedinUrl: string;location: string;  phoneNumber: string;summary: string;  educations: { title: string;type: string;location: string;    startDate: Date;  endDate: Date;}[];  experiences: { position: string;startDate: Date;endDate: Date;  company: string;responsibilities: string;  }[]; languages: { name: string;isNative: boolean;reading: string;    listening: string;   speaking: string;}[];  digitalSkills: string[]; softSkills: string[];  hobbies: string[]; certificates: {name: string;    receivedDate: Date;    expirationDate: Date;  }[];volunteering: {role: string; organization: string;}[];publications: {name: string;    link: string; releaseDate: Date;}[];  drivingLicense: string;}. If the value of a specific key is not found and its type is string, assign it as empty. Validate every property value if are correctly spelled in albanian and correct them. Reply only with the json no other/additional words/symbols before or after it. Translate every json value into albanian. Do not add fake values, such as fake or random firstName or lastName. For example if there is no email assign it as empty string.`,
      },
    ];

    const body: ChatCompletionCreateParamsNonStreaming = {
      messages,
      model: AkpaModels.CHAT,
      function_call: { name: 'extractInformationFromAnswers' },
      functions: [extractInformationFromAnswers],
      response_format: { type: 'json_object' },
    };

    return this.openAIService.generateCompletion(
      body,
      userId,
      PromptType.ResumeWizard,
    );
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
        const years = Math.round(yearsOfExperience);
        systemPrompt = `${AkpaPrompts.generateSummary}. ${years}`;
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

      const body: ChatCompletionCreateParamsNonStreaming = {
        messages,
        model: AkpaModels.CHAT,
      };

      return this.openAIService.generateCompletion(
        body,
        userId,
        PromptType.Summary,
      );
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
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

    const body: ChatCompletionCreateParamsNonStreaming = {
      messages,
      model: AkpaModels.CHAT,
    };

    const response = await this.openAIService.generateCompletion(
      body,
      userId,
      PromptType.YearsOfExperience,
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
          content: JSON.stringify(userInput),
        },
      ];

      const body: ChatCompletionCreateParamsNonStreaming = {
        messages,
        model: AkpaModels.CHAT,
      };

      return this.openAIService.generateCompletion(
        body,
        userId,
        PromptType.Responsibility,
      );
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  toString(input: any): string {
    return JSON.stringify(input);
  }

  async uploadResumePicture(
    file: Express.Multer.File,
    resumeId: string,
    userId: string,
  ) {
    try {
      const resume = this.findResumeById(resumeId, userId);
      if (!resume) throw new NotFoundException(`Resume not found`);
      const mimeType = file.mimetype.split('/')[1];
      const photoKey = `resume/${resumeId}.${mimeType}`;
      const uploadResponse = await this.s3Service.uploadPhoto(file, photoKey);
      if (uploadResponse == 200) {
        this.resumeRepository.updateResume(resumeId, {
          profilePicture: photoKey,
        });
      }
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async askWizardResume(
    userId: string,
    userRequest: string,
  ): Promise<string | null> {
    try {
      const messages: ChatCompletionMessageParam[] = [
        {
          role: 'system',
          content: AkpaPrompts.resumeWizard,
        },
        {
          role: 'user',
          content: userRequest,
        },
      ];

      const body: ChatCompletionCreateParamsNonStreaming = {
        messages,
        model: AkpaModels.CHAT,
      };

      return this.openAIService.generateCompletion(
        body,
        userId,
        PromptType.Resume,
      );
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      throw new InternalServerErrorException(
        'Failed to generate text from OpenAI',
      );
    }
  }
}
