import { IAnswer } from "~~/types/IAnswer"
import { IQuestion } from "~~/types/IQuestion";
import { IUser } from "~~/types/IUser"

export async function submitNewAnswer({ text, question }: { text: string; question: IQuestion }): Promise<IAnswer | null> {
  const user = useState<IUser>('user')
  console.log('composable/Answer#submitNewAnswer@user', user.value)
  if(!user.value) throw new Error("User not connected");
  const { data, error } = await useFetch<IAnswer>('/api/answer', {
    method: 'POST',
    body: { data: { text, question, author: user } }
  })

  return data.value
}