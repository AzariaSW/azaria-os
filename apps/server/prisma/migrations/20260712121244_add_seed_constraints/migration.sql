/*
  Warnings:

  - A unique constraint covering the columns `[name,issuer]` on the table `Certificate` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[institution,degree]` on the table `Education` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[company,role]` on the table `Experience` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `Project` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Skill` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Certificate_name_issuer_key" ON "Certificate"("name", "issuer");

-- CreateIndex
CREATE UNIQUE INDEX "Education_institution_degree_key" ON "Education"("institution", "degree");

-- CreateIndex
CREATE UNIQUE INDEX "Experience_company_role_key" ON "Experience"("company", "role");

-- CreateIndex
CREATE UNIQUE INDEX "Project_title_key" ON "Project"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_name_key" ON "Skill"("name");
