/*
  Warnings:

  - Made the column `field` on table `Education` required. This step will fail if there are existing NULL values in that column.
  - Made the column `level` on table `Skill` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Education" ALTER COLUMN "field" SET NOT NULL;

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "cvUrl" TEXT,
ADD COLUMN     "resumeUrl" TEXT;

-- AlterTable
ALTER TABLE "Skill" ALTER COLUMN "level" SET NOT NULL;
