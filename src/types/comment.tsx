import {User} from './user';
export type Comment = {
  id: number;
  user: User;
  rating: number;
  comment: string;
  date: string;
}
