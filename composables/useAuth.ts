import { useRouter, useState } from "#app";
import { ISession } from "~~/types/ISession";
import { IUser } from "~/types/IUser";
import { FormValidation } from "~~/types/FormValidation";

export const useAuthCookie = () => useCookie("auth_token");

export async function useUser(): Promise<IUser> {
  const authCookie = useAuthCookie().value;
  const user = useState<IUser>("user");
  console.log(
    "composable/useAuth#useUser@authCookie&user",
    authCookie,
    user.value
  );
  if (authCookie && !user.value) {
    const { data } = await useFetch(`/api/auth/getByAuthToken`, {
      headers: useRequestHeaders(["cookie"]),
    });

    if (data.value) user.value = data.value;
  }

  return user.value;
}

export async function userLogout() {
  await useFetch("/api/auth/logout");
  useState("user").value = null;
  await useRouter().push("/");
}

export async function registerWithEmail(
  username: string,
  name: string,
  email: string,
  password: string
): Promise<FormValidation | undefined> {
  try {
    const { data, error } = await useFetch<ISession>("/api/auth/register", {
      method: "POST",
      body: { data: { username, name, email, password } },
    });

    if (error.value) {
      return { hasErrors: true, message: error.value?.data?.message };
    }

    if (data) {
      useState("user").value = data;
      await useRouter().push("/");
    }

    // return {hasErrors: true, errors: undefined}
  } catch (e) {
    console.log("error: " + e?.toString());
  }
}

export async function loginWithEmail(email: string, password: string) {
  const user = (await $fetch("/api/auth/login", {
    method: "POST",
    body: { email: email, password: password },
  })) as IUser;
  useState("user").value = user;
  await useRouter().push("/");
}
