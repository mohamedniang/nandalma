import { H3Event, sendError } from "h3";
import { getUserByEmail, getUserPassword } from "~~/server/database/repositories/userRepository";
import { makeSession } from "~~/server/services/sessionService";
import { LoginRequest } from "~~/types/IRegistration";
import bcrypt from 'bcrypt'

export default defineEventHandler(async (event: H3Event) => {
  const body = await readBody(event) 
  const data = body as LoginRequest

  console.log(`login@data`, data)
  if(!data.email) throw new Error("adresse email requis")
  const user = await getUserByEmail(data.email)
  
  console.log(`login@user`, user)
  const databaseUser = await getUserPassword(user.id!)
  const isPasswordMatching = await bcrypt.compare(data.password, databaseUser.password!)
  console.log(`login@isPasswordMatching`, isPasswordMatching)
  
  if(!isPasswordMatching) sendError(event, Error('mot de passe incorrect'))
  else return await makeSession(user, event)
})