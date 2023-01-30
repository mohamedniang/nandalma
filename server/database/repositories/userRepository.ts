import prisma from "~/server/database/client";
import { IUser } from "~/types/IUser";

export async function getUserByEmail(email: string): Promise<IUser> {
  return await prisma.user.findUnique({
    where: { email: email },
    select: {
      id: true,
      username: true,
    },
  }) as IUser;
}
export async function getUserPassword(id: number): Promise<IUser> {
  return await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      username: true,
      password: true,
    },
  }) as IUser;
}
export async function getUserByUsername(username: string): Promise<IUser> {
  return await prisma.user.findUnique({
    where: { username: username },
    select: {
      id: true,
      username: true,
    },
  }) as IUser;
}
export async function createUser(data: IUser): Promise<IUser> {
  const { username, name, email, loginType, password } = data;
  return await prisma.user.create({
    data: {
      username,
      name,
      email,
      loginType,
      password,
    },
  }) as IUser;
}
