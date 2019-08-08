import { UserTask } from './userTask';
import { USERS } from './mock-users';

export let USER_TASKS: UserTask[];
USER_TASKS = [
  {id: 11, description: 'Make call', state: 'Open' , user: USERS[0]},
  {id: 12, description: 'Send email', state: 'Closed' , user: USERS[2]}
];
