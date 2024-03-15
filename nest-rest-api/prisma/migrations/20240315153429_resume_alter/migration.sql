/*
  Warnings:

  - You are about to drop the column `require_History` on the `prompts` table. All the data in the column will be lost.
  - You are about to drop the column `education` on the `resumes` table. All the data in the column will be lost.
  - You are about to drop the column `enhanced` on the `resumes` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "resumes_email_key";

-- AlterTable
ALTER TABLE "prompts" DROP COLUMN "require_History",
ADD COLUMN     "require_history" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "resumes" DROP COLUMN "education",
DROP COLUMN "enhanced",
ADD COLUMN     "educations" JSONB,
ADD COLUMN     "referenceId" TEXT;

-- AddForeignKey
ALTER TABLE "resumes" ADD CONSTRAINT "resumes_referenceId_fkey" FOREIGN KEY ("referenceId") REFERENCES "jobs"("id") ON DELETE SET NULL ON UPDATE CASCADE;
