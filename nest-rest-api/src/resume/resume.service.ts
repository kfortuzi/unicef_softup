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
import { ResumeWizardDto } from './dto/resume-wizard.dto';
import { JsonValue } from '@prisma/client/runtime/library';
import { WizardService } from 'src/wizard/wizard.service';
import { S3Service } from 'src/s3/s3.service';

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
      throw new Error(`${error}`);
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
      digitalSkills: data.digitalSkills ? data.digitalSkills : null,
      softSkills: data.softSkills ? data.softSkills : null,
      hobbies: data.hobbies ? data.hobbies : null,
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
      throw new Error(`${error}`);
    }
  }

  async deleteResume(id: string, userId: string) {
    const resume = await this.findResumeById(id, userId);
    if (resume.referenceId == null) {
      throw new Error(`User default resume can not be deleted`);
    }
    return this.resumeRepository.softDelete(id);
  }

  async resumeGenerationFromWizard(userId: string, userInput: ResumeWizardDto) {
    try {
      const validatedJson = await this.validateQuestionWizard(
        userId,
        userInput,
      );

      if (validatedJson) {
        const data = JSON.parse(validatedJson);
        const isValidResponese = this.evaluateResponse(data);
        if (isValidResponese) {
          this.wizardService.saveWizardAnswers(userInput, userId, 'Resume');
          const generatedResume = await this.generateResumeJson(
            userId,
            userInput,
          );
          if (generatedResume) {
            return this.mapResumeOutputdata(generatedResume, userId);
          }
        }
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

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
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async enhanceResponsibility(
    userExperience: any,
    userId: string,
  ): Promise<ExperienceDto[]> {
    return await Promise.all(
      Object.entries(userExperience).map(
        async (experience: [string, string]) => {
          const data: ExperienceDto = JSON.parse(experience[1]);
          if (data.responsibilities) {
            const enhancedResponsibility = await this.generateResponsibility(
              userId,
              data,
            );
            if (enhancedResponsibility)
              data.responsibilities = enhancedResponsibility;
          }
          return data;
        },
      ),
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
      const validatedResponse = await this.openAIService.generateCompletion(
        messages,
        AkpaModels.IS_VALID_ANSWER,
        userId,
        'ValidateResume',
      );

      if (!validatedResponse) {
        throw new Error('No data to process');
      }

      return JSON.parse(validatedResponse);
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async generateResumeJson(
    userId: string,
    userInput: ResumeDto | ResumeWizardDto,
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
          content: JSON.stringify(userInput),
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
      throw new Error(`${error}`);
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
      return this.openAIService.generateCompletion(
        messages,
        AkpaModels.MAIN_CHAT,
        userId,
        'Resume',
      );
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      throw new Error('Failed to generate text from OpenAI');
    }
  }
}
