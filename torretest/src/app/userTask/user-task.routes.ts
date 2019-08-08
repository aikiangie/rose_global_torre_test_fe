import { Routes } from '@angular/router';
import { UserTaskListComponent } from './user-task-list/user-task-list.component';
import { UserTaskEditComponent } from './user-task-edit/user-task-edit.component';

export const USERTASK_ROUTES: Routes = [
  {
    path: 'user-task',
    component: UserTaskListComponent
  },
  {
    path: 'user-task/:id',
    component: UserTaskEditComponent
  }
]
