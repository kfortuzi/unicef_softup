/*
  Warnings:

  - You are about to drop the `processing` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "processing";

-- CreateTable
CREATE TABLE "prompts" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "promptType" TEXT NOT NULL,
    "requireHistory" BOOLEAN NOT NULL DEFAULT false,
    "promptRequest" TEXT NOT NULL,
    "prompResponse" TEXT,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "prompts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "prompts" ADD CONSTRAINT "prompts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
