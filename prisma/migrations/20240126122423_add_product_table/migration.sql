/*
  Warnings:

  - You are about to drop the column `confirmPassword` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `confirmPassword` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Company" DROP COLUMN "confirmPassword";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "confirmPassword";
