import { getOneAnswer } from "~~/server/database/repositories/answerRepository";
import { IAnswer } from "~~/types/IAnswer";

export default defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id) as number
  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID should be an integer',
    })
  }
  return await getOneAnswer(id)
});
