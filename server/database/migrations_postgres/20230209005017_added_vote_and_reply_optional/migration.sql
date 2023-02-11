-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_replyToId_fkey";

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_replyToId_fkey" FOREIGN KEY ("replyToId") REFERENCES "Answer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
