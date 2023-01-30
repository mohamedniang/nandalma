import { getQuestions } from "~~/server/database/repositories/questionRepository";
import { IQuestion } from "~~/types/IQuestion";

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  console.log("question/get#default@query", query);

  return await getQuestions(query);
});
