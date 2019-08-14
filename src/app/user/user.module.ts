import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserService } from './user.service';
import { USER_ROUTES } from './user.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(USER_ROUTES)
  ],
  declarations: [
    UserListComponent,
    UserEditComponent
  ],
  providers: [
    UserService
  ],
  exports: [
  ]
})
export class UserModule { }
