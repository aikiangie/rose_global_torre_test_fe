import { Component, OnInit } from '@angular/core';
import { UserTaskService } from '../user-task.service';
import { UserTask } from '../userTask';

@Component({
  selector: 'app-user-tasks',
  templateUrl: './user-tasks.component.html',
  styleUrls: ['./user-tasks.component.css']
})
export class UserTasksComponent implements OnInit {

  userTasks: UserTask[];
  selectedUserTask: UserTask;

  constructor(private userTaskService: UserTaskService) { }

  getUserTasks(): void {
    this.userTaskService.getUserTasks()
      .subscribe(userTasks => this.userTasks = userTasks);
  }

  ngOnInit() {
    this.getUserTasks();
  }

  onSelect(userTask: UserTask): void {
    this.selectedUserTask = userTask;
  }

}
