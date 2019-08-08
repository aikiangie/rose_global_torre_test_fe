import { Component, OnInit, Input } from '@angular/core';
import { UserTask } from '../userTask';
@Component({
  selector: 'app-user-task-detail',
  templateUrl: './user-task-detail.component.html',
  styleUrls: ['./user-task-detail.component.css']
})
export class UserTaskDetailComponent implements OnInit {

  @Input() userTask: UserTask;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.userTask);

  }

}
