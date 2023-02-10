import { IAnswer } from "./IAnswer";
import { IUser } from "./IUser";
import { IQuestion } from "./IQuestion";

export interface IVote {
  id: number;
  feedback: boolean;
  user?: IUser;
  userId?: number;
  answer?: IAnswer;
  answerId?: number;
  question?: IQuestion;
  questionId?: number;
}
