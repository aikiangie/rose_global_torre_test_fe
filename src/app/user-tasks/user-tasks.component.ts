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

  ngOnInit() {
    this.getUserTasks();
  }

  getUserTasks(): void {
    this.userTaskService.getUserTasks()
      .subscribe(
        data =>
          this.userTasks = data
      );
  }

  onSelect(userTask: UserTask): void {
    this.selectedUserTask = userTask;
  }

}
