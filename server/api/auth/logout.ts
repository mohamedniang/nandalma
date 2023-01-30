import { H3Event } from "h3";
import { deleteSession } from "~~/server/services/sessionService";

export default defineEventHandler(async (event: H3Event) => {
  const authToken = getCookie(event, "auth_token");
  setCookie(event, "auth_token", "");
  await deleteSession(authToken!);
});
