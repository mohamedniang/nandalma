import prisma from "~/server/database/client";
import { IVote } from "~~/types/IVote";
import { IUser } from "~~/types/IUser";

export async function createVote({
  userId,
  feedback,
  questionId,
  answerId,
}: {
  userId: number;
  feedback: boolean;
  questionId?: number;
  answerId?: number;
}): Promise<IVote> {
  console.log(
    "voteRepository#createVote@userId&feedback&questionId&answerId",
    userId,
    feedback,
    questionId,
    answerId
  );

  let type = "";
  let typeId = 0;
  if (questionId) {
    type = "questionId";
    typeId = questionId;
  } else if (answerId) {
    type = "answerId";
    typeId = answerId;
  } else
    throw createError({
      statusCode: 400,
      statusMessage: "Besoin d'un antité sur lequel appliquer le vote",
    });

  const isVotedAlready = await prisma.vote.findUnique({
    where: {
      ...(type == "questionId"
        ? {
            userId_questionId: {
              userId,
              questionId: typeId,
            },
          }
        : type == "answerId"
        ? {
            userId_answerId: {
              userId,
              answerId: typeId,
            },
          }
        : {}),
    },
  });

  console.log("voteRepository#createVote@isVotedAlready", isVotedAlready);

  if (isVotedAlready) {
    if (isVotedAlready.feedback == feedback) {
      throw createError({
        statusCode: 400,
        statusMessage: "vous avez déja voter",
      });
    } else return (await prisma.vote.delete({
      where: { id: isVotedAlready.id },
    })) as unknown as IVote;
  }

  return (await prisma.vote.create({
    data: {
      userId,
      feedback,
      [type]: typeId,
    },
  })) as unknown as IVote;
}

export async function deleteVote(id: number): Promise<IVote> {
  return (await prisma.vote.delete({
    where: { id },
  })) as unknown as IVote;
}
