import { IAnswer } from "./IAnswer";
import { IUser } from "./IUser";

export interface IQuestion {
  id?: number;
  author?: IUser;
  authorId: number;
  title: string;
  description: string;
  answers?: IAnswer[];
}
