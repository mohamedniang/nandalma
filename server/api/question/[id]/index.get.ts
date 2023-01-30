import { getOneQuestion } from "~~/server/database/repositories/questionRepository";
import { IQuestion } from "~~/types/IQuestion";

export default defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id) as number
  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID should be an integer',
    })
  }
  return await getOneQuestion(id)
});
