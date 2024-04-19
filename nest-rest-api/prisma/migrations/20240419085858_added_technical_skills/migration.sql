-- AlterTable
ALTER TABLE "resumes" ADD COLUMN     "technical_skills" TEXT[] DEFAULT ARRAY[]::TEXT[];
