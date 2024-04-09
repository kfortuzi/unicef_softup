/*
  Warnings:

  - You are about to drop the column `confirmedAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `verification_code` on the `users` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "CodeType" AS ENUM ('VERIFICATION', 'PASSWORD_RESET');

-- AlterTable
ALTER TABLE "users" DROP COLUMN "confirmedAt",
DROP COLUMN "verification_code";

-- CreateTable
CREATE TABLE "user_code" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "type" "CodeType" NOT NULL,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "confirmed_at" TIMESTAMP(6),

    CONSTRAINT "user_code_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_code" ADD CONSTRAINT "user_code_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
