/*
  Warnings:

  - You are about to drop the column `endedAt` on the `prompts` table. All the data in the column will be lost.
  - You are about to drop the column `prompResponse` on the `prompts` table. All the data in the column will be lost.
  - You are about to drop the column `promptRequest` on the `prompts` table. All the data in the column will be lost.
  - You are about to drop the column `promptType` on the `prompts` table. All the data in the column will be lost.
  - You are about to drop the column `requireHistory` on the `prompts` table. All the data in the column will be lost.
  - You are about to drop the column `startedAt` on the `prompts` table. All the data in the column will be lost.
  - Added the required column `prompt_request` to the `prompts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prompt_type` to the `prompts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "prompts" DROP COLUMN "endedAt",
DROP COLUMN "prompResponse",
DROP COLUMN "promptRequest",
DROP COLUMN "promptType",
DROP COLUMN "requireHistory",
DROP COLUMN "startedAt",
ADD COLUMN     "ended_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "promp_response" TEXT,
ADD COLUMN     "prompt_request" TEXT NOT NULL,
ADD COLUMN     "prompt_type" TEXT NOT NULL,
ADD COLUMN     "require_history" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "started_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
