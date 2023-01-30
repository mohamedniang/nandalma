import { createAnswer } from "~~/server/database/repositories/answerRepository";
import { IAnswer } from "~~/types/IAnswer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const data = body.data as IAnswer;
  console.log("answer/post#default@data", data);

  return await createAnswer(data);
});
