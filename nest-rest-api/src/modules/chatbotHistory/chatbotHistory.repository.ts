import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/modules/commons/prisma/prisma.service';
import { ConversatonHistoryDialog } from './types';

@Injectable()
export class ChatbotHistoryRepository {
  constructor(private prismaService: PrismaService) {}

  public async createHistoryDialog(
    data:
      | Prisma.chatbot_historyUncheckedCreateInput
      | Prisma.chatbot_historyCreateInput,
  ) {
    return await this.prismaService.chatbot_history.create({ data });
  }

  async findLastConversationHistoryPerUser(userId: string) {
    const conversation = await this.prismaService.$queryRaw`
SELECT question as user, answer as assistant FROM chatbot_history WHERE user_id=${userId} AND created_at >=
 (SELECT created_at FROM chatbot_history WHERE first_conversation_message=true AND user_id=${userId} ORDER BY created_at DESC LIMIT 1);`;
    return conversation as ConversatonHistoryDialog[];
  }
}
