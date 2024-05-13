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
import { AIModels, AkpaModels } from '../openai/models';
import { AkpaPrompts } from '../openai/promptContent';
import { ResumeRepository } from './resume.repository';
import { DrivingLicense, Prisma, SourceType } from '@prisma/client';
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
import { WizardDto } from './dto/wizard.dto';

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
    const summary = await this.improveSummary(resume, userId);
    if (summary) resume.summary = summary;
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
          'You are a helpful resume assistant that formats and extracts all the necessary resume data from my interview answers that will be in albanian language. You never generate fictive resume information. Always assign null if there is no value. For example if there is no first name the firstName of the in the json response should be : {firstName:null}',
      },
      {
        role: 'user',
        content: `The interviewer asked me questions chronologically about: experiences, educations, native language, other languages, digital skills, technical skills, soft skills, hobbies and the last one was a summary. Here are my interview answers: ${JSON.stringify(
          userInput,
        )}`,
      },
      {
        role: 'assistant',
        content: `OK, got it. How can I help you?`,
      },
      {
        role: 'user',
        content: `Reply only with the response nothing else. The response must be a json. Do not change, add or remove any information of the sections. Replace double quotes inside the values of json (not the starting and ending double quotes) with single quotes. This is the type of the driving licence:${DrivingLicense}. It must be null if there is no info about driving licence mentioned. Find its type based on the word I have chosen to describe it and then convert it based on the enum. Use it in the json response. The language reading, listening and writing must have have one of these values: [A1,B1,B2,C1,C2]. Convert the language level if it is a word to one of these values. For example if the level is shlelqyeshem, it means the level is C1. The json response must have this exact interface: {email: string|null;firstName: string|null;lastName: string|null; profilePicture: string|null;nationality: string|null; linkedinUrl: string|null;location: string|null;  phoneNumber: string|null;summary: string|null;  educations: { title: string|null;type: string|null;location: string|null;    startDate: Date|null;  endDate: Date|null;}[];  experiences: { position: string|null;startDate: Date|null;endDate: Date|null;  company: string|null;responsibilities: string|null;  }[]; languages: { name: string|null;isNative: boolean|null;reading: string|null;    listening: string|null;   speaking: string|null;}[];  digitalSkills: string[]; softSkills: string[];  hobbies: string[]; certificates: {name: string|null;    receivedDate: Date|null;    expirationDate: Date|null;  }[];volunteering: {role: string|null; organization: string|null;}[];publications: {name: string|null;    link: string|null; releaseDate: Date|null;}[];  drivingLicense: DrivingLicence|null;}. If the value of a specific key is not found and its type is string, assign it as empty. Validate every property value if are correctly spelled in albanian and correct them. Reply only with the json no other/additional words/symbols before or after it. Translate every json value into albanian. Do not add fake values, such as fake or random firstName or lastName. For example if there is no email assign it as empty string.`,
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
      model: AIModels.gpt_4_1106_preview,
    };

    return this.openAIService.generateCompletion(
      body,
      userId,
      PromptType.Summary,
    );
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
    const user = await this.userService.findOne(userId);
    if (!user) throw new NotFoundException('User does not exist!');

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
  }

  async autoGenerateResponsibilities(
    userId: string,
    experience: ExperienceDto,
  ) {
    const user = await this.userService.findOne(userId);
    if (!user) throw new NotFoundException('User does not exist!');

    const messages: ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content:
          'Je nje asistent i cili permireson pergjegjesite dhe detyrat e mia te kryera gjate nje eksperience pune, ne menyre qe te permiresoj CV time.',
      },
      {
        role: 'user',
        content: `Kjo eshte eksperienca ime: ${experience}.`,
      },
      {
        role: 'assistant',
        content:
          'Po, e analizova eksperiencen tende. Cfare duhet te bej me te?',
      },
      {
        role: 'user',
        content:
          'Duke u bazuar ne eksperiencen e dhene, permireso, riformulo dhe shto nese mundesh pergjegjesite dhe detyrat e mia pergjate eksperiences. Ne rast se nuk ka, gjenero disa duke u bazuar ne punen e bere. Nese ka, riformulo pergjegjesite dhe detyrat ekzistuese duke perdorur fjale te tjera per te pershkruar dhe gjenero/shto disa detyrime te tjera qe mund te kem pasur, por kam harruar ti shkruaj dhe mungojne ne eksperience. Asnjehere pergjegjesite e gjeneruara nuk duhet te jene shkruar ne te njejten menyre(copy-paste) si ato te meparshmet edhe pse mund te tregojne per te njejtat gjera. Me doemos perdor fjale te tjera te ndryshme per te treguar detyrimet. Perdor nje ton profesional ne pergjigjen e dhene. Pergjigju vetem me pergjegjesite dhe detyrat e eksperiences asnje fjale apo fjali shpjeguese me shume para ose mbrapa tyre. Ky eshte nje shembull sesi pergjigja duhet te duket : “1. Analiza e tregjeve dhe zhvillimi i strategjive të biznesit në përputhje me teknologjitë dhe zhvillimet më të fundit në fushën e ekonomisë dhe financave.\n 2.Planifikimi dhe implementimi i strukturës së financave për të siguruar efikasitet dhe stabilitet financiar për organizatën.3. Krijimi dhe menaxhimi i bazës së të dhënave financiare, duke përdorur teknologji dhe mjete të specializuara për të siguruar që të dhënat të jenë të saktë dhe të mbrohen me përmbajtje të duhur.\n 4. Bashkëpunimi me ekipin e financës dhe menaxhmentin e lartë për të identifikuar dhe implementuar zgjidhje inovative për sfidat financiare dhe biznesore, duke përdorur njohuri të thelluara të ekonomisë dhe financave”. Pergjigja duhet te jete me patjeter ne gjuhen shqipe Pergjigja duhet te permbaje vetem detyrimet dhe asgje tjeter. Nuk duhet te kete fjali si psh: “Keto jane pergjegjesite e tua.”.',
      },
    ];

    const body: ChatCompletionCreateParamsNonStreaming = {
      messages,
      model: AIModels.gpt_35_turbo_0125,
      temperature: 0.9,
    };

    return this.openAIService.generateCompletion(
      body,
      userId,
      PromptType.Responsibility,
    );
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

  async improveExperienceResponsibilities(
    userId: string,
    data: WizardDto,
  ): Promise<string | null> {
    const { content, message } = data;

    const user = await this.userService.findOne(userId);
    if (!user) throw new NotFoundException('User does not exist!');

    const messages: ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content:
          'Je nje asistent i cili permireson pergjegjesite dhe detyrat e mia te nje eksperience pune, ne menyre qe te permiresoj CV time ne baze te nje mendimi/inputi timin nese mendimi perputhet me komanda permiresimi dhe eshte dicka ligjore.',
      },
      {
        role: 'user',
        content: `Ky eshte teksti qe permban experiencen time, te cilin duhet ta permiresosh : ${content}. Kjo eshte menyra/mendimi im sesi une dua ta permiresosh: ${message}. Filimisht valido mire mendimin tim. Nese eshte dicka e pakuptimte per te modifikuar kontekstin e eksperiences, nese eshte ne gjuhe tjeter pervec shqipes ose nese te them te shtosh dicka te paligjshme si per shembull "Shto qe jam marre me droge" ose "Jam drogaxhi", kurre dhe asnjehere mos e bej dicka te tille. Injoroje mendimin tim dhe thjesht permireso tekstin e eksperiences duke permiresuar fjalet e perdorura dhe perdor nje ton me profesional dhe duke e bere tekstin me te plote duke shtuar gjera relevante per eksperiencen time. Gjenero nje tekst te permiresuar ne kete rast. Rikthe permbledhjen dhe vetem dhe vetem permbledhjen e eksperiences te permiresuar. Mos shto fjali para ose mbrapa si psh: Kjo eshte eksperienca juaj. Kthe vetem permbledhjen. Permbledhja duhet te jete ne veten e pare, ne menyre qe ta vendose direkt ne CV. Pergjigja duhet te jete me patjeter permbledhje eksperience dhe te mos permbaje fjali shpjeguese sesi u krijuar permbledhja. Mos jep rekomandime ne pergjigjen tende.`,
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
  }

  async improveSummaryWithWizard(
    userId: string,
    data: WizardDto,
  ): Promise<string | null> {
    const { content, message } = data;

    const user = await this.userService.findOne(userId);
    if (!user) throw new NotFoundException('User does not exist!');

    const last8HourMessages =
      await this.openAIService.findLastMessagesPer8Hours(
        userId,
        PromptType.AskResumeSummaryWizard,
      );
    if (last8HourMessages >= 7)
      throw new UnprocessableEntityException(
        'Limit 7 messages per 8 hours reached!',
      );

    const messages: ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content:
          'Je nje asistent i cili permireson dhe modifikon permbledhjen time te profilit, ne menyre qe te permiresoj CV time ne baze te nje mendimi/inputi timin nese mendimi perputhet me komanda permiresimi dhe eshte dicka ligjore.',
      },
      {
        role: 'user',
        content: `Ky eshte teksti qe permban permbledhjen e profilit tim, te cilin duhet ta permiresosh : ${content}. Kjo eshte menyra/mendimi im sesi une dua ta permiresosh: ${message}. Filimisht valido mire mendimin tim. Nese eshte dicka e pakuptimte per te modifikuar kontekstin e permbledhjes se CV (seksionin "Rreth meje"), nese eshte ne gjuhe tjeter pervec shqipes ose nese te them te shtosh dicka te paligjshme si per shembull "Shto qe jam marre me droge" ose "Jam drogaxhi", kurre dhe asnjehere mos e bej dicka te tille. Injoroje mendimin tim dhe thjesht permireso tekstin e permbledhjes duke permiresuar fjalet e perdorura dhe perdor nje ton me profesional dhe duke e bere tekstin me te plote duke shtuar gjera relevante per permbledhjen e profilit tim. Gjenero nje tekst te permiresuar ne kete rast. Rikthe permbledhjen dhe vetem dhe vetem permbledhjen e seksionit "Rreth meje" te permiresuar. Mos shto fjali para ose mbrapa si psh: Kjo eshte permbledhja e profilit tuaj. Kthe vetem permbledhjen. Permbledhja duhet te jete ne veten e pare, ne menyre qe ta vendose direkt ne CV. Pergjigja duhet te jete me patjeter permbledhje e seksionit "Rreth meje" te CV-së dhe te mos permbaje fjali shpjeguese sesi u krijuar permbledhja. Mos jep rekomandime ne pergjigjen tende.`,
      },
    ];

    const body: ChatCompletionCreateParamsNonStreaming = {
      messages,
      model: AkpaModels.CHAT,
    };

    return this.openAIService.generateCompletion(
      body,
      userId,
      PromptType.AskResumeSummaryWizard,
    );
  }

  async improveSummary(actualResume: ResumeDto, userId: string) {
    const messages: ChatCompletionMessageParam[] = [
      {
        role: 'user',
        content:
          'I am seeking to generate an impressive summary for my resume. I would like the summary to reflect my expertise and achievements. Please generate a concise summary highlighting my key skills, notable accomplishments and professional background in general without adding details, that will captivate hiring managers. Keep it under 60 words. The language of the generated summary must be in albanian.',
      },
      {
        role: 'user',
        content: `Here is my actual resume ${JSON.stringify(
          actualResume,
        )}. Generate a professional summary based on the my resume given above.  Return only the summary as a string. The summary must be translated in albanian`,
      },
    ];

    const body: ChatCompletionCreateParamsNonStreaming = {
      messages,
      model: AkpaModels.CHAT,
      response_format: { type: 'text' },
    };

    return this.openAIService.generateCompletion(
      body,
      userId,
      PromptType.ResumeWizard,
    );
  }

  async autoGenerateSummary(userId: string, summary: string) {
    const user = await this.userService.findOne(userId);
    if (!user) throw new NotFoundException('User was not found!');

    const messages: ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content:
          'Je nje asistent i cili permireson permbledhjen time aktuale te seksionit "Rreth meje", ne menyre qe te permiresoj CV time.',
      },
      {
        role: 'user',
        content: `Kjo eshte permbledhja ime aktuale: ${summary}, ndersa ky eshte profili im : ${JSON.stringify(
          user,
        )}.`,
      },
      {
        role: 'assistant',
        content:
          'Po, i analizova permbledhjen aktuale dhe profilin tend. Cfare duhet te bej me to?',
      },
      {
        role: 'user',
        content:
          'Duke u bazuar ne profilin tim, eksperiencat dhe aftesite e mia, gjenero nje permbledhje krejt te re nga ajo aktuale. Permend aftesite dhe gjerat me impresionuese dhe me te rendesishme ne permbledhje. Permbledhja e re duhet te kete nje ndryshim shume te dukshem nga ajo e vjetra duke nisur qe nga fjalet e perdorura. Rikthe permbledhjen dhe vetem dhe vetem permbledhjen e seksionit "Rreth meje" te permiresuar. Mos shto fjali para ose mbrapa si psh: Kjo eshte permbledhja e profilit tuaj. Kurre mos permend emrin tim ne permbledhje. Kthe vetem permbledhjen si pergjigje. Permbledhja duhet te jete ne veten e pare. Ky eshte nje shembull qe gjeta sesi dua qe te jete pergjigja/permbedhja ime: ‘Ekonomist me përvojë 6-vjeçare në analizën financiare dhe menaxhimin e burimeve financiare në sektorin e biznesit. Ekspertizë në interpretimin e të dhënave financiare dhe hartimin e raporteve analitike për të udhëhequr vendimmarrjen strategjike. Aftësi të shquara në modelimin financiar dhe vlerësimin e projekteve të investimeve. Demonstrim i një aftësie të shkëlqyer për të menaxhuar ekipet dhe për të koordinuar me ndërsektorë për të arritur qëllimet e biznesit. Përvojë në përgatitjen dhe monitorimin e buxhetit dhe strategjive të financimit. Pasion për analizën ekonomike dhe përmirësimin e performancës financiare të organizatës’. Gjeneroje permbledhjen e re me te njejtin stil si shembulli i mesiperm, por ne baze te profilit tim. Perdor nje ton profesional dhe gjuhe akademike.  Pergjigju vetem me permbledhjen ne gjuhen shqipe',
      },
    ];

    const body: ChatCompletionCreateParamsNonStreaming = {
      messages,
      model: AkpaModels.CHAT,
      temperature: 0.9,
    };

    return this.openAIService.generateCompletion(
      body,
      userId,
      PromptType.Summary,
    );
  }
}
