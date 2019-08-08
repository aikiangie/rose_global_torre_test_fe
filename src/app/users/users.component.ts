import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  selectedUser: User;

  constructor(private userService: UserService) { }

  /*getUsers(): void {
    this.users = this.userService.getUsers();
  }
*/
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      data => {
       // this.data = data;
        console.log(data);
      }
    );
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

}
