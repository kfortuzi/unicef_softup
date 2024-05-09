import { PromptType } from './promptTypes';

export interface SavePromptData {
  promptType: PromptType;
  promptRequest: string;
  prompResponse: string;
  userId: string;
  startDate: Date;
  endDate: Date;
}
