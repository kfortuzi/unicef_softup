/*
  Warnings:

  - The values [part,full] on the enum `JobType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `articles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `videos` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `date_end` to the `jobs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_start` to the `jobs` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `reference_id` on the `jobs` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `title` on table `jobs` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "EducationType" AS ENUM ('HighSchool', 'Bachelor', 'Master', 'PhD');

-- AlterEnum
BEGIN;
CREATE TYPE "JobType_new" AS ENUM ('FullTime', 'PartTime', 'Contract');
ALTER TABLE "jobs" ALTER COLUMN "type" TYPE "JobType_new" USING ("type"::text::"JobType_new");
ALTER TYPE "JobType" RENAME TO "JobType_old";
ALTER TYPE "JobType_new" RENAME TO "JobType";
DROP TYPE "JobType_old";
COMMIT;

-- AlterTable
ALTER TABLE "jobs" ADD COLUMN     "basic_skills" TEXT,
ADD COLUMN     "communication_skill" BOOLEAN,
ADD COLUMN     "computer_skills" TEXT,
ADD COLUMN     "date_end" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "date_start" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "deleted_at" TIMESTAMP(6),
ADD COLUMN     "education_type" "EducationType",
ADD COLUMN     "experience" TEXT,
ADD COLUMN     "foreign_language" TEXT,
ADD COLUMN     "isUnvailable" BOOLEAN,
ADD COLUMN     "need_driving_license" BOOLEAN,
ADD COLUMN     "payment_level" TEXT,
ADD COLUMN     "skill_lines" TEXT,
ADD COLUMN     "skills" TEXT,
ADD COLUMN     "specializations" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(6),
DROP COLUMN "reference_id",
ADD COLUMN     "reference_id" INTEGER NOT NULL,
ALTER COLUMN "title" SET NOT NULL;

-- DropTable
DROP TABLE "articles";

-- DropTable
DROP TABLE "videos";
