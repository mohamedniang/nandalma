import { IUser } from "~~/types/IUser";
import { getUserBySessionToken } from "~~/server/services/sessionService";

export default defineEventHandler<IUser>(async (event) => {
  const authToken = getCookie(event, 'auth_token')
  const user = await getUserBySessionToken(authToken)

  return user
})