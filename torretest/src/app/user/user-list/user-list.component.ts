import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
    selector: 'user',
    templateUrl: 'user-list.component.html'
})
export class UserListComponent {

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

}
