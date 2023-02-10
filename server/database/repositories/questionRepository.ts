import prisma from "~/server/database/client";
import { IQuestion } from "~~/types/IQuestion";
import { createVote } from "./voteRepository";

export async function createQuestion(data: IQuestion): Promise<IQuestion> {
  const { title, description, author } = data;

  if(!title) throw new Error("le titre est requis");
  if(!description) throw new Error("un contenue est requis");
  if(!author?.id) throw new Error("auteur introuvable");
  

  return (await prisma.question.create({
    data: {
      title,
      description,
      authorId: author?.id!,
    },
  })) as unknown as IQuestion;
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
    orderBy: {
      createdAt: 'desc'
    }
  })) as unknown as IQuestion[];
}

export async function getOneQuestion(id: number): Promise<IQuestion> {
  return (await prisma.question.findUniqueOrThrow({
    where: { id },
    include: {
      author: true,
      votes: true,
      answers: {
        include: {
          author: true,
          replies: {
            include: {
              author: true,
              replies: true
            }
          }
        },
        orderBy: {
          createdAt: 'desc'
        }
      }
    }
  })) as unknown as IQuestion;
}

export async function updateOneQuestion(id: number, body: any): Promise<any> {
  console.log(id, body)
  const { voteCount, authorId } = body
  if(voteCount && authorId) await createVote({ userId: authorId, feedback: voteCount > 0, questionId: id })
  return await prisma.question.update({
    where: { id },
    data: {
      voteCount: { increment: parseInt(voteCount) }
    }
  })
}
