import { IUser } from "./IUser";
import { IQuestion } from "./IQuestion";


export interface IAnswer {
  id?: number;
  question?: IQuestion;
  questionId: number;
  author?: IUser;
  authorId: number;
  replyTo?: IAnswer;
  replyToId: number;
  replies: IAnswer[]
  text: string;
}