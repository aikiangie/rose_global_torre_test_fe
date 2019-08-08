import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user);
    this.userService.updateUser(this.user).subscribe(
      data => {
        console.log(data);
      }
    );
  }

  onDelete() {
    console.log(this.user);
    this.userService.deleteUser(this.user.id).subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
