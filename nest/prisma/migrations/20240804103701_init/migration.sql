-- CreateEnum
CREATE TYPE "VacancyType" AS ENUM ('LOW', 'HIGH');

-- CreateTable
CREATE TABLE "Worker" (
    "id" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "telegram" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Worker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vacancy" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "count" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "workTime" TEXT NOT NULL,
    "salary" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "type" "VacancyType" NOT NULL,

    CONSTRAINT "Vacancy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shift" (
    "id" TEXT NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "progress" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "hideChildren" BOOLEAN NOT NULL,
    "displayOrder" INTEGER NOT NULL,

    CONSTRAINT "Shift_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Interview" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "count" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Interview_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Worker_email_key" ON "Worker"("email");
