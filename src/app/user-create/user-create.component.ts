import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  constructor(private userService: UserService) { }

  user: User;

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.user);
    this.userService.addUser(this.user).subscribe(
      data => {
        console.log(data);
      }
    );
  }
}
