import { getAnswers } from "~~/server/database/repositories/answerRepository";

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  console.log("answer/get#default@query", query);

  return await getAnswers(query);
});
