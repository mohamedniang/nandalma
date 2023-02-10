import prisma from "~/server/database/client";
import { IAnswer } from "~~/types/IAnswer";
import { createVote } from "./voteRepository";

export async function createAnswer(data: IAnswer): Promise<IAnswer> {
  const { text, question=null, author, replyTo=null } = data;

  if(!text || text == "") throw new Error("Le texte de la réponse est requis");
  if(!author || author.id == null) throw new Error("Vous devez être connecter");

  
  return (await prisma.answer.create({
    data: {
      text,
      questionId: question ? question.id : null,
      authorId: author?.id,
      replyToId: replyTo ? replyTo?.id : null,
    },
    include: {
      author: {
        select: {
          username: true
        }
      }
    }
  })) as unknown as IAnswer;
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
  })) as unknown as IAnswer[];
}

export async function getOneAnswer(id: number): Promise<IAnswer> {
  return (await prisma.answer.findUniqueOrThrow({
    where: { id },
  })) as unknown as IAnswer;
}

export async function updateOneAnswer(id: number, body: any): Promise<any> {
  console.log(id, body)
  const { voteCount, authorId } = body
  if(voteCount && authorId) await createVote({ userId: authorId, feedback: voteCount > 0, answerId: id })
  return (await prisma.answer.update({
    where: { id },
    data: {
      voteCount: { increment: voteCount }
    }
  })) as unknown as IAnswer;
}
