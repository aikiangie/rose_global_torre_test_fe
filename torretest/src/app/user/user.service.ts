import { User } from './user';
import { UserFilter } from './user-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  userList: User[] = [];
  baseApiUrl = 'http://langelicajr.pythonanywhere.com/users/';

  findById(id: string): Observable<User> {
    const url = this.baseApiUrl + id + '/';
    const params = { };
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<User>(url, {params, headers});
  }

  load(): void {
    this.find().subscribe(
      result => {
        this.userList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(): Observable<User[]> {
    const url = this.baseApiUrl;
    const headers = new HttpHeaders().set('Accept', 'application/json');
    const params = {};
    return this.http.get<User[]>(url, {params, headers});
  }

  delete(id: number): Observable<User> {
    const url = this.baseApiUrl + id + '/';
    const params = { };
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.delete<User>(url, {params, headers});
  }

  save(entity: User): Observable<User> {
    let url = this.baseApiUrl;
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    if ( entity.id ) {
      url = this.baseApiUrl + entity.id + '/';
      return this.http.put<User>(url, entity, {headers});
    } else {
      return this.http.post<User>(url, entity, {headers});
    }

  }
}

