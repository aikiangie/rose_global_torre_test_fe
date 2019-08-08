import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

interface ServerData {
  users: User[];
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /*getUsers(): User[] {
    return (USERS);
  }*/

  getUsers(): Observable<User[]> {

    return this.http
      .get<ServerData>('http://langelicajr.pythonanywhere.com/users/').map(res => res as User[]);
  }
  constructor(private http: HttpClient) { }
}
