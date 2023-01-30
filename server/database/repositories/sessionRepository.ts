import prisma from "~/server/database/client";
import { ISession } from "~~/types/ISession";
import { IUser } from "~~/types/IUser";

export async function createSession({userId, authToken} : {userId: number, authToken: string}): Promise<ISession>{  
  return await prisma.session.create({
    data: {
      userId,
      authToken
    }
  })
}

export async function deleteSession(authToken: string): Promise<ISession>{
  return await prisma.session.delete({
    where: { authToken }
  })
}
export async function getSessionByAuthToken(authToken: string): Promise<ISession>{
  const user: IUser = await getUserByAuthToken(authToken) as unknown as IUser

  return { authToken, user }
}
async function getUserByAuthToken(authToken: string): Promise<IUser>{
  return await prisma.session.findUnique({
    where: { authToken }
  }).user() as IUser
}