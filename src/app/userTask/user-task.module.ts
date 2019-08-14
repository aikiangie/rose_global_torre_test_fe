import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserTaskListComponent } from './user-task-list/user-task-list.component';
import { UserTaskEditComponent } from './user-task-edit/user-task-edit.component';
import { UserTaskService } from './user-task.service';
import { USERTASK_ROUTES } from './user-task.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(USERTASK_ROUTES)
  ],
  declarations: [
    UserTaskListComponent,
    UserTaskEditComponent
  ],
  providers: [
    UserTaskService
  ],
  exports: [
  ]
})
export class UserTaskModule { }
