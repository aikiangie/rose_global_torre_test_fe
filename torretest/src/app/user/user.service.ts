import { User } from './user';
import { UserFilter } from './user-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) {
    }

  userList: User[] = [];
  url = 'http://langelicajr.pythonanywhere.com/users';


  findById(id: string): Observable<User> {
        const params = { 'id': id };
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<User>(this.url, {params, headers});
    }

    load(filter: UserFilter): void {
        this.find(filter).subscribe(
            result => {
                this.userList = result;
            },
            err => {
                console.error('error loading', err);
            }
        );
    }

    find(filter: UserFilter): Observable<User[]> {
        const headers = new HttpHeaders() .set('Accept', 'application/json').set('Access-Control-Allow-Origin', '*').set('Content-Type', 'application/json');

      const params = {
            'name': filter.name,
        };

        return this.http.get<User[]>(this.url, {params, headers});
    }

    save(entity: User): Observable<User> {
      const headers = new HttpHeaders() .set('Accept', 'application/json');
      return this.http.post<User>(this.url, entity, {headers});
    }
}

