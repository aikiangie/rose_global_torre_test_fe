import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { UsersComponent } from './users/users.component';
import { UserTasksComponent } from './user-tasks/user-tasks.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserTaskDetailComponent } from './user-task-detail/user-task-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserTasksComponent,
    UserDetailComponent,
    UserTaskDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
