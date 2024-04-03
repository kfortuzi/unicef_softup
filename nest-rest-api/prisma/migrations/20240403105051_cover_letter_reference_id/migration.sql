-- AlterTable
ALTER TABLE "cover_letters" ADD COLUMN     "referenceId" TEXT;

-- AddForeignKey
ALTER TABLE "cover_letters" ADD CONSTRAINT "cover_letters_referenceId_fkey" FOREIGN KEY ("referenceId") REFERENCES "jobs"("id") ON DELETE SET NULL ON UPDATE CASCADE;
