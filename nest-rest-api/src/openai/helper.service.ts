import { Injectable } from '@nestjs/common';
import { OpenAIService } from './openai.service';
import { ChatCompletionMessageParam } from 'openai/resources/chat';
import { AkpaModels } from './models';
import * as fs from 'fs';
import { promisify } from 'util';
const appendFileAsync = promisify(fs.appendFile);
import { profilesJson, Profile } from '../resume/profile';
import { error } from 'console';

@Injectable()
export class HelperService {
  constructor(private openAIService: OpenAIService) {}

  async loopProfiles() {
    try {
      profilesJson.forEach((profile) => {
        this.generatefileJsonl(profile);
      });
    } catch {
      console.log(error);
    }
  }

  async generatefileJsonl(userpInput: string | Profile) {
    const messages: ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content:
          'You are a helpfull assistant that helps user format data from a given input json into a given output json.The input Json object should be {"experience": "", "education": "", "mother_language": "", "other_language": "", "digital_skill": "", "soft_skills": "", "hobbies": "", "certificates": "", "extra_information": "", "volunteering": "", "publications": ""} and output JSON object should be { "education": [{"title": "", "type": "", "location": "", "startDate": "", "endDate": ""}], "experiences": [{"startDate": "", "endDate": "", "position": "", "company": "", "responsibilities": ""}], "languages": [{"name": "", "reading": "", "writing": "", "speaking": ""}], "digitalSkills": [], "softSkills": [], "hobbies": [], "certifications": [{"name": "", "receivedDate": "", "expirationDate": null}], "volunteering": [{"role": "", "organization": "", "icon": null, "startDate": "", "endDate": ""}], "publications": [{"name": "", "releaseDate": "", "link": null}]}',
      },
      {
        role: 'user',
        content: `This is input JSON object: ${JSON.stringify(
          userpInput,
        )} . If data are missing or empty, only reply with null. Do not change, add or remove any information of the sections. Replace double quotes inside the values of json (not the starting and ending double quotes) with single quotes.Only information about Experience should be split and detailed into the experiences array with startDate, endDate, position, company, and responsibilities. Order experience in desc. Education information should be organized into the education array with title, type, location, startDate, and endDate. For the hobbies, certification, publication, volunteer, if they are not null, format them into bullet points. validate every property value if are correctly spelled in albanian and correct them. Reply only with the json no other/additional words/symbols before or after it. correct grammer,translate every json value into albanian and make it professional`,
      },
    ];

    const json_data = await this.openAIService.generateCompletion(
      messages,
      AkpaModels.IS_VALID_ANSWER,
    );
    if (json_data.message.content) {
      const messages2: ChatCompletionMessageParam[] = [
        {
          role: 'system',
          content:
            'You are a helpfull assistant that helps user format data from a given input json into a given output json.The input Json object should be {"experience": "", "education": "", "mother_language": "", "other_language": "", "digital_skill": "", "soft_skills": "", "hobbies": "", "certificates": "", "extra_information": "", "volunteering": "", "publications": ""} and output JSON object should be { "education": [{"title": "", "type": "", "location": "", "startDate": "", "endDate": ""}], "experiences": [{"startDate": "", "endDate": "", "position": "", "company": "", "responsibilities": ""}], "languages": [{"name": "", "reading": "", "writing": "", "speaking": ""}], "digitalSkills": [], "softSkills": [], "hobbies": [], "certifications": [{"name": "", "receivedDate": "", "expirationDate": null}], "volunteering": [{"role": "", "organization": "", "icon": null, "startDate": "", "endDate": ""}], "publications": [{"name": "", "releaseDate": "", "link": null}]}',
        },
        {
          role: 'user',
          content: `This is input JSON object: ${JSON.stringify(
            userpInput,
          )}. If data are missing or empty, only reply with null. Do not change, add or remove any information of the sections. Replace double quotes inside the values of json (not the starting and ending double quotes) with single quotes.Only information about Experience should be split and detailed into the experiences array with startDate, endDate, position, company, and responsibilities. Order experience in desc. Education information should be organized into the education array with title, type, location, startDate, and endDate. For the hobbies, certification, publication, volunteer, if they are not null, format them into bullet points. validate every property value if are correctly spelled in albanian and correct them. Reply only with the json no other/additional words/symbols before or after it. correct grammer,translate every json value into albanian and make it professional`,
        },
        {
          role: 'assistant',
          content: JSON.parse(json_data.message.content),
        },
      ];
      appendFileAsync(
        'jsonl_file',
        `{"messages": ${JSON.stringify(messages2)}}\n`,
      );
    }
  }

  async generateCoverJsonl(userpInput: string, jobInput: string) {
    const messages: ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content:
          'You are a helpful assistant that generates cover letter based on job description and user resume. The structure of the resoponse should be {\n  "to": "String",\n  "company": "String",\n  "companyAddress":  "String",\n    \n  "content": "String"\n} or the message `Ju lutem plotësoni të dhënat e profilit dhe përzgjidhni një pozicion pune speficik për të gjeneruar letrën e motivimit për aplikimin në këtë punë.` in case there is not any user profile or job description.',
      },
      {
        role: 'user',
        content: `This is the user profile JSON object: ${JSON.stringify(
          userpInput,
        )}  and this is the job description ${JSON.stringify(
          jobInput,
        )}  The cover letter should be in albanian and should have 250 to 400 words. Translate every word from user profile into albanian.Response only with the right structure.`,
      },
    ];

    const json_data = await this.openAIService.generateCompletion(
      messages,
      AkpaModels.CHAT,
    );
    if (json_data.message.content) {
      const messages2: ChatCompletionMessageParam[] = [
        {
          role: 'system',
          content:
            'You are a helpful assistant that generates cover letter based on job description and user resume. The structure of the resoponse should be {\n  "to": "String",\n  "company": "String",\n  "companyAddress":  "String",\n    \n  "content": "String"\n} or the message `Ju lutem plotësoni të dhënat e profilit dhe përzgjidhni një pozicion pune speficik për të gjeneruar letrën e motivimit për aplikimin në këtë punë.` in case there is not any user profile or job description.',
        },
        {
          role: 'user',
          content: `This is the user profile JSON object: ${JSON.stringify(
            userpInput,
          )}  and this is the job description ${JSON.stringify(
            jobInput,
          )}  The cover letter should be in albanian and should have 250 to 400 words. Translate every word from user profile into albanian.Response only with the right structure.`,
        },
        {
          role: 'assistant',
          content: json_data.message.content,
        },
      ];
      appendFileAsync(
        'jsonl_file',
        `{"messages": ${JSON.stringify(messages2)}}\n`,
      );
    }
  }
}
