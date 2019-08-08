import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserTasksComponent } from './user-tasks/user-tasks.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'userTasks', component: UserTasksComponent },
  { path: 'userCreate', component: UserCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
