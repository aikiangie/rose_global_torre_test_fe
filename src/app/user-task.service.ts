import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import {UserTask} from './userTask';
import { USER_TASKS } from './mock-user-tasks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserTaskService {

  getUserTasks(): Observable<UserTask[]> {
    this.messageService.add('UserTasksService: fetched usersTaskcs');
    return of(USER_TASKS);
  }
  constructor(private messageService: MessageService) { }
}
