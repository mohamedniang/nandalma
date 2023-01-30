import prisma from "~/server/database/client";
import { IQuestion } from "~~/types/IQuestion";

export async function createQuestion(data: IQuestion): Promise<IQuestion> {
  const { title, description, author } = data;
  return (await prisma.question.create({
    data: {
      title,
      description,
      authorId: author?.id!,
    },
  })) as IQuestion;
}

export async function getQuestions(query: any): Promise<IQuestion[]> {
  const { filter } = query;
  return (await prisma.question.findMany({
    include: {
      author: {
        select: {
          username: true,
        },
      },
    },
  })) as IQuestion[];
}

export async function getOneQuestion(id: number): Promise<IQuestion> {
  return (await prisma.question.findUniqueOrThrow({
    where: { id },
    include: {
      author: true,
      answers: {
        include: {
          author: true
        }
      }
    }
  })) as IQuestion;
}
