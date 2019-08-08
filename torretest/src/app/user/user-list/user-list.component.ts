import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserFilter } from '../user-filter';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
    selector: 'user',
    templateUrl: 'user-list.component.html'
})
export class UserListComponent {

    filter = new UserFilter();
    selectedUser: User;

    get userList(): User[] {
        return this.userService.userList;
    }

    constructor(private userService: UserService) {
    }

    ngOnInit() {
    }

    search(): void {
        this.userService.load(this.filter);
    }

    select(selected: User): void {
        this.selectedUser = selected;
    }

}
