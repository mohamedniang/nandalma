/*
  Warnings:

  - Added the required column `replyToId` to the `Answer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Answer" ADD COLUMN     "replyToId" INTEGER NULL,
ADD COLUMN     "votes" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "votes" INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_replyToId_fkey" FOREIGN KEY ("replyToId") REFERENCES "Answer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
