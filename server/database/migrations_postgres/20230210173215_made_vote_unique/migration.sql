/*
  Warnings:

  - A unique constraint covering the columns `[userId,answerId,questionId]` on the table `Vote` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Vote_userId_answerId_questionId_key" ON "Vote"("userId", "answerId", "questionId");
