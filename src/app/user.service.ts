import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers(): User[] {
    return USERS;
  }
  constructor() { }
}
