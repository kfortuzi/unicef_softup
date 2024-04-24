/*
  Warnings:

  - You are about to drop the column `ended_at` on the `chatbot_history` table. All the data in the column will be lost.
  - You are about to drop the column `started_at` on the `chatbot_history` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "chatbot_history" DROP COLUMN "ended_at",
DROP COLUMN "started_at",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
