// import { CompatibilityEvent, sendError } from "h3";
import bcrypt from 'bcrypt'
import { IUser } from "~~/types/IUser";
import { doesUserExists } from "~~/server/services/userService";
import { createUser } from "~~/server/database/repositories/userRepository";
import { makeSession } from "~~/server/services/sessionService";
import { RegistationRequest } from "~~/types/IRegistration";

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const data = body.data

  const validation = await doesUserExists(data.username, data.email)

  if (validation.value === true) {
    return sendError(event, createError({ statusCode: 422, data: validation.message }))
  }

  const encryptedPassword: string = await bcrypt.hash(data.password, 10)

  const userData: IUser = {
    username: data.username,
    name: data.name,
    email: data.email,
    loginType: 'email',
    password: encryptedPassword
  }

  const user = await createUser(userData)

  return await makeSession(user, event)
})