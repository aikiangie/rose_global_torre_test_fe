import {User} from './user';

export class UserTask {
  id: number;
  description: string;
  state: string;
  user: User;
}
