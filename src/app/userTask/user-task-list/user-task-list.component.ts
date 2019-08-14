import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserTaskFilter } from '../user-task-filter';
import { UserTaskService } from '../user-task.service';
import { UserService } from '../../user/user.service';
import { UserTask } from '../user-task';
import {User} from "../../user/user";

@Component({
    selector: 'user-task',
    templateUrl: 'user-task-list.component.html'
})
export class UserTaskListComponent {

    filter = new UserTaskFilter();
    selectedUserTask: UserTask;

  get userList(): User[] {
    return this.userService.userList;
  }

    get userTaskList(): UserTask[] {
        return this.userTaskService.userTaskList;
    }

    constructor(private userService: UserService, private userTaskService: UserTaskService) {
    }

    ngOnInit() {
      this.userService.load();
      this.search();
    }

    search(): void {
        this.userTaskService.load(this.filter);
    }

    select(selected: UserTask): void {
        this.selectedUserTask = selected;
    }

    delete(selected: UserTask): void {
      this.selectedUserTask = selected;
    }

}
