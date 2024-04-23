import { Injectable } from '@nestjs/common';
import { QAItem } from './types';

@Injectable()
export class ChatbotHelper {
  constructor() {}

  mergeChatHistoryWithFunctionCalling(conversation: QAItem[]) {
    let indexToBeSkipped: number | undefined = undefined;
    const conversationWithFunctionCalling = conversation.map((item, index) => {
      if (index === indexToBeSkipped) return null;

      if (item.answer === 'function_call') {
        indexToBeSkipped = index + 1;
        return {
          question: item.question,
          answer: conversation[indexToBeSkipped].answer,
        };
      }

      return item;
    });

    return conversationWithFunctionCalling.filter((item) => !!item);
  }
}
