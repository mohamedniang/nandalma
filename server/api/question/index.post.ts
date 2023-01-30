import { createQuestion } from "~~/server/database/repositories/questionRepository";
import { IQuestion } from "~~/types/IQuestion";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const data = body.data as IQuestion;
  console.log("question/post#default@data", data);

  return await createQuestion(data);
});
