import { IAnswer } from "./IAnswer";
import { IUser } from "./IUser";
import { IVote } from "./IVote";

export interface IQuestion {
  id?: number;
  author?: IUser;
  authorId: number;
  title: string;
  description: string;
  answers: IAnswer[];
  voteCount: number;
  votes: IVote[];
}
