import { updateOneQuestion } from "~~/server/database/repositories/questionRepository";

export default defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id) as number
  const body = await readBody(event)
  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID should be an integer',
    })
  }
  return await updateOneQuestion(id, body)
});
