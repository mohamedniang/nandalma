-- DropIndex
DROP INDEX `Answer_authorId_fkey` ON `answer`;

-- DropIndex
DROP INDEX `Answer_questionId_fkey` ON `answer`;

-- DropIndex
DROP INDEX `Answer_replyToId_fkey` ON `answer`;

-- DropIndex
DROP INDEX `Question_authorId_fkey` ON `question`;

-- DropIndex
DROP INDEX `Vote_answerId_fkey` ON `vote`;

-- DropIndex
DROP INDEX `Vote_questionId_fkey` ON `vote`;

-- AlterTable
ALTER TABLE `question` MODIFY `description` LONGTEXT NULL;

-- AddForeignKey
ALTER TABLE `Session` ADD CONSTRAINT `Session_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Question` ADD CONSTRAINT `Question_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Answer` ADD CONSTRAINT `Answer_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `Question`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Answer` ADD CONSTRAINT `Answer_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Answer` ADD CONSTRAINT `Answer_replyToId_fkey` FOREIGN KEY (`replyToId`) REFERENCES `Answer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vote` ADD CONSTRAINT `Vote_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vote` ADD CONSTRAINT `Vote_answerId_fkey` FOREIGN KEY (`answerId`) REFERENCES `Answer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vote` ADD CONSTRAINT `Vote_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `Question`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
