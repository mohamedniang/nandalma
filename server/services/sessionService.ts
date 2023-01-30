import { H3Event } from "h3";
import { ISession } from "~~/types/ISession";
import { IUser } from "~~/types/IUser";
import { v4 as uuidv4 } from "uuid";
import { createSequenceExpression } from "@vue/compiler-core";
import {
  createSession,
  getSessionByAuthToken,
  deleteSession as dl,
} from "../database/repositories/sessionRepository";
import { sanitizeUser } from "./userService";

export async function makeSession(
  user: IUser,
  event: H3Event
): Promise<IUser | undefined> {
  const authToken = uuidv4().replaceAll("-", "");
  if(!user.id) throw Error("No user Id");
  const session = await createSession({ authToken, userId: user.id });
  const userId = session.userId;

  if (userId) {
    setCookie(event, "auth_token", authToken, { path: "/", httpOnly: true });
    return getUserBySessionToken(authToken);
  }

  throw Error("Error while creating session");
}

export async function deleteSession(authToken: string): Promise<ISession> {
  return await dl(authToken);
}

export async function getUserBySessionToken(
  authToken: string
): Promise<IUser | undefined> {
  const session = await getSessionByAuthToken(authToken);
  return sanitizeUser(session.user);
}
