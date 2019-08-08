import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /*getUsers(): User[] {
    return (USERS);
  }*/

  getUsers(): Observable<any> {
    return this.http.get('http://langelicajr.pythonanywhere.com/users/');
  }
  constructor(private http: HttpClient) { }
}
