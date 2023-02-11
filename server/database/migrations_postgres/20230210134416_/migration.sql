/*
  Warnings:

  - You are about to drop the column `votesCount` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `votesCount` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the `Votes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Votes" DROP CONSTRAINT "Votes_answerId_fkey";

-- DropForeignKey
ALTER TABLE "Votes" DROP CONSTRAINT "Votes_questionId_fkey";

-- DropForeignKey
ALTER TABLE "Votes" DROP CONSTRAINT "Votes_userId_fkey";

-- AlterTable
ALTER TABLE "Answer" DROP COLUMN "votesCount",
ADD COLUMN     "voteCount" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Question" DROP COLUMN "votesCount",
ADD COLUMN     "voteCount" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "Votes";

-- CreateTable
CREATE TABLE "Vote" (
    "id" SERIAL NOT NULL,
    "feedback" BOOLEAN NOT NULL,
    "userId" INTEGER NOT NULL,
    "answerId" INTEGER,
    "questionId" INTEGER,

    CONSTRAINT "Vote_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_answerId_fkey" FOREIGN KEY ("answerId") REFERENCES "Answer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE SET NULL ON UPDATE CASCADE;
