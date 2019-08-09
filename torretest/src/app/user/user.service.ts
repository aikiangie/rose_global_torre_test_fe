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

    findById(id: string): Observable<User> {
        let url = 'http://langelicajr.pythonanywhere.com/users/' + id + '/';
        let params = { };
        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');
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
        )
    }

    find(): Observable<User[]> {
        let url = 'http://langelicajr.pythonanywhere.com/users/';
        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        let params = {};

        return this.http.get<User[]>(url, {params, headers});
    }

    save(entity: User): Observable<User> {
      let headers = new HttpHeaders()
        .set('Accept', 'application/json');

      if( entity.id ){
        let url = 'http://langelicajr.pythonanywhere.com/users/' + entity.id + '/';
        return this.http.put<User>(url, entity, {headers});
      }else{
        let url = 'http://langelicajr.pythonanywhere.com/users/';
        return this.http.post<User>(url, entity, {headers});
      }

    }
}

