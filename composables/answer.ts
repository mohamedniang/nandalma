import { IAnswer } from "~~/types/IAnswer"
import { IQuestion } from "~~/types/IQuestion";
import { IUser } from "~~/types/IUser"

interface AnswerReturnType {
  data: IAnswer | null;
  error: any;
}

export async function submitNewAnswer({ text, question }: { text: string; question: IQuestion }): Promise<AnswerReturnType> {
  const user = useState<IUser>('user')
  let err = null
  if(!user.value) throw new Error("User not connected");
  const { data, error } = await useFetch<IAnswer>('/api/answer', {
    method: 'POST',
    body: { data: { text, question: { id: question.id }, author: { id: user.value.id} } }
  })
  
  console.log('composable/Answer#submitNewAnswer@error', error, data)
  if(error.value) err = { hasErrors: true, message: error.value?.data?.message }

  return {
    data: data.value,
    error: err
  }
}

export async function submitNewReply({ text, answer }: { text: string; answer: IAnswer }): Promise<AnswerReturnType> {
  const user = useState<IUser>('user')
  let err = null
  if(!user.value) throw new Error("User not connected");
  const { data, error } = await useFetch<IAnswer>('/api/answer', {
    method: 'POST',
    body: { data: { text, replyTo: { id: answer.id }, author: { id: user.value.id} } }
  })
  
  console.log('composable/Answer#submitNewAnswer@error', error, data)
  if(error.value) err = { hasErrors: true, message: error.value?.data?.message }

  return {
    data: data.value,
    error: err
  }
}