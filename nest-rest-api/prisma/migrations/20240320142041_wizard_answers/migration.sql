-- CreateEnum
CREATE TYPE "SourceType" AS ENUM ('Resume', 'CoverLetter');

-- CreateTable
CREATE TABLE "wizard_answer" (
    "id" TEXT NOT NULL,
    "text" JSONB NOT NULL,
    "source" "SourceType" NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "wizard_answer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "wizard_answer" ADD CONSTRAINT "wizard_answer_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
