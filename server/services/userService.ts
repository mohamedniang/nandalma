import { RegistationRequest } from "~~/types/IRegistration";
import { IUser } from "~~/types/IUser";
import {
  getUserByEmail,
  getUserByUsername,
} from "../database/repositories/userRepository";

type ExistsCheck = {
  value: boolean;
  message?: string;
};
type RegistrationErrors = {
  emailError?: string;
  usernameError?: string;
};

export async function doesUserExists(
  email: string,
  username: string
): Promise<ExistsCheck> {
  const hasEmail = await getUserByEmail(email);
  const hasUsername = await getUserByUsername(username);

  const emailExists = hasEmail !== null;
  const usernameExists = hasUsername !== null;

  const errors: RegistrationErrors = {};

  if (emailExists) errors.emailError = `this ${email} already exist`;
  if (usernameExists) errors.usernameError = `this ${username} already exist`;

  if (emailExists || usernameExists) {
    const message = JSON.stringify(errors);
    return {
      value: true,
      message,
    };
  }
  return { value: false };
}

export function sanitizeUser(user: IUser | undefined): IUser | undefined {
  if (!user) return user;

  delete user.password;
  delete user.loginType;

  return user;
}
