import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://langelicajr.pythonanywhere.com/users/';
  headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, PUT, POST')
    .set('Access-Control-Allow-Headers', 'Origin, X-Request ed-With, Content-Type, Accept');

  httpOptions = {
    headers: this.headers
  };

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  addUser(user: User): Observable<User> {
    user.id = null;
    return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  deleteUser(id: number): Observable<User> {
    const url = `${this.apiUrl}${id}`;
    return this.httpClient.delete<User>(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  updateUser(user: User): Observable<User> {
    const url = `${this.apiUrl}${user.id}`;
    return this.httpClient.put<User>(url, user, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  constructor(private httpClient: HttpClient) { }
}
