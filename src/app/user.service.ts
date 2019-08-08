import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://langelicajr.pythonanywhere.com/users/';
  /*getUsers(): User[] {
    return (USERS);
  }*/

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  constructor(private httpClient: HttpClient) { }
}
