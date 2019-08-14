import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
    selector: 'user',
    templateUrl: 'user-list.component.html'
})
export class UserListComponent {

  selectedUser: User;

    get userList(): User[] {
        return this.userService.userList;
    }

    constructor(private userService: UserService) {
    }

    ngOnInit() {
      this.search();
    }

    search(): void {
        this.userService.load();
    }

  delete(selected: User): void {

      if (!confirm('Are you sure?')) {
        return;
      }

    this.selectedUser = selected;
    this.userService.delete(selected.id).subscribe(
      user => {
        this.search();
      },
      err => {
        this.search();
      }
    );

  }

}
