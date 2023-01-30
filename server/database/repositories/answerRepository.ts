import prisma from "~/server/database/client";
import { IAnswer } from "~~/types/IAnswer";

export async function createAnswer(data: IAnswer): Promise<IAnswer> {
  const { text, question, author } = data;
  return (await prisma.answer.create({
    data: {
      text,
      questionId: question?.id!,
      authorId: author?.id!,
    },
  })) as IAnswer;
}

export async function getAnswers(query: any): Promise<IAnswer[]> {
  const { filter } = query;
  return (await prisma.answer.findMany({
    include: {
      author: {
        select: {
          username: true,
        },
      },
    },
  })) as IAnswer[];
}

export async function getOneAnswer(id: number): Promise<IAnswer> {
  return (await prisma.answer.findUniqueOrThrow({
    where: { id },
  })) as IAnswer;
}
