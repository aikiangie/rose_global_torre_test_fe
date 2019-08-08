import { Injectable } from '@angular/core';
import {UserTask} from './userTask';
import { USER_TASKS } from './mock-user-tasks';

@Injectable({
  providedIn: 'root'
})
export class UserTaskService {

  getUserTasks(): UserTask[] {
    return (USER_TASKS);
  }
  constructor() { }
}
