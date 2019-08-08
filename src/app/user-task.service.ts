import { Injectable } from '@angular/core';
import {UserTask} from './userTask';
import { USER_TASKS } from './mock-user-tasks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserTaskService {

  getUserTasks(): Observable<UserTask[]> {
    return of(USER_TASKS);
  }
  constructor() { }
}
