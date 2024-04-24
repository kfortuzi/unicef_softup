/*
  Warnings:

  - You are about to drop the column `first_chatbot_conversation_message` on the `prompts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "prompts" DROP COLUMN "first_chatbot_conversation_message";

-- CreateTable
CREATE TABLE "chatbot_history" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "ended_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "first_conversation_message" BOOLEAN NOT NULL DEFAULT false,
    "started_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "chatbot_history_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "chatbot_history" ADD CONSTRAINT "chatbot_history_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
