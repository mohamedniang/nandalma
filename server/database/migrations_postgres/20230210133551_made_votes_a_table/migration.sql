/*
  Warnings:

  - You are about to drop the column `votes` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `votes` on the `Question` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Answer" DROP COLUMN "votes",
ADD COLUMN     "votesCount" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Question" DROP COLUMN "votes",
ADD COLUMN     "votesCount" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Votes" (
    "id" SERIAL NOT NULL,
    "feedback" BOOLEAN NOT NULL,
    "userId" INTEGER NOT NULL,
    "answerId" INTEGER,
    "questionId" INTEGER,

    CONSTRAINT "Votes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Votes" ADD CONSTRAINT "Votes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Votes" ADD CONSTRAINT "Votes_answerId_fkey" FOREIGN KEY ("answerId") REFERENCES "Answer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Votes" ADD CONSTRAINT "Votes_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE SET NULL ON UPDATE CASCADE;
