import { IQuestion } from "~~/types/IQuestion"
import { IUser } from "~~/types/IUser"

export async function submitNewQuestion({ title, description }: { title: string; description: string }): Promise<IQuestion | null> {
  const user = useState<IUser>('user')
  console.log('composable/question#submitNewQuestion@user', user.value)
  if(!user.value) throw new Error("User not connected");
  const { data, error } = await useFetch<IQuestion>('/api/question', {
    method: 'POST',
    body: { data: { title, description, author: user } }
  })

  return data.value
}