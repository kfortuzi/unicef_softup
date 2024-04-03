/*
  Warnings:

  - You are about to drop the column `textsearchable_index_col` on the `jobs` table. All the data in the column will be lost.
  - The `digital_skills` column on the `resumes` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `soft_skills` column on the `resumes` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `hobbies` column on the `resumes` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropIndex
DROP INDEX "textsearch_idx";

-- AlterTable
ALTER TABLE "jobs" DROP COLUMN "textsearchable_index_col";

-- AlterTable
ALTER TABLE "resumes" DROP COLUMN "digital_skills",
ADD COLUMN     "digital_skills" TEXT[] DEFAULT ARRAY[]::TEXT[],
DROP COLUMN "soft_skills",
ADD COLUMN     "soft_skills" TEXT[] DEFAULT ARRAY[]::TEXT[],
DROP COLUMN "hobbies",
ADD COLUMN     "hobbies" TEXT[] DEFAULT ARRAY[]::TEXT[];
