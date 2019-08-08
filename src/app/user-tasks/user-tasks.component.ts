import { Component, OnInit } from '@angular/core';
import {UserTask} from '../userTask';
import {User} from '../user';
import { USER_TASKS } from '../mock-user-tasks';
import {USERS} from '../mock-users';

@Component({
  selector: 'app-user-tasks',
  templateUrl: './user-tasks.component.html',
  styleUrls: ['./user-tasks.component.css']
})
export class UserTasksComponent implements OnInit {

  userTasks = USER_TASKS;
  selectedUserTask: UserTask;

  constructor() { }

  ngOnInit() {
  }

  onSelect(userTask: UserTask): void {
    this.selectedUserTask = userTask;
  }

}
