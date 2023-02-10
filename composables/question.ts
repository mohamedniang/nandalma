import { FormValidation } from "~~/types/FormValidation";
import { IQuestion } from "~~/types/IQuestion";
import { IUser } from "~~/types/IUser";

export async function submitNewQuestion({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  interface resp {
    data?: IQuestion;
    error: {
      hasErrors: boolean;
      message?: string;
    };
  }

  let result: resp = {
    error: {
      hasErrors: false,
    },
  };
  const user = useState<IUser>("user");
  console.log("composable/question#submitNewQuestion@user", user.value);
  if (!user.value) throw new Error("User not connected");
  const { data, error } = await useFetch<IQuestion>("/api/question", {
    method: "POST",
    body: { data: { title, description, author: user } },
  });

  if (error.value)
    result.error = { hasErrors: true, message: error.value?.data?.message };
  if (data.value) result.data = data.value;
  return result;
}
