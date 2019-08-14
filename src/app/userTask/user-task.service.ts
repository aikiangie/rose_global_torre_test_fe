import { UserTask } from './user-task';
import { UserTaskFilter } from './user-task-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {User} from '../user/user';

@Injectable()
export class UserTaskService {

    constructor(private http: HttpClient) {}

    userTaskList: UserTask[] = [];
    baseApiUrl = 'http://langelicajr.pythonanywhere.com/userTask/';

    findById(id: string): Observable<UserTask> {
      const url = this.baseApiUrl + id + '/';
      const params = { };
      const headers = new HttpHeaders().set('Accept', 'application/json');
      return this.http.get<UserTask>(url, {params, headers});
    }

    load(filter: UserTaskFilter): void {
        this.find(filter).subscribe(
            result => {
                this.userTaskList = result;
            },
            err => {
                console.error('error loading', err);
            }
        );
    }

    find(filter: UserTaskFilter): Observable<UserTask[]> {
        let url = this.baseApiUrl;
        if ( filter.user != null && !isNaN(filter.user) ) {
          url = url + '?userId=' + filter.user;
        }

        console.log(filter.user);
        const headers = new HttpHeaders().set('Accept', 'application/json');
        const params = {};
        return this.http.get<UserTask[]>(url, {params, headers});
    }

  delete(id: number): Observable<UserTask> {
    const url = this.baseApiUrl + id + '/';
    const params = { };
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.delete<UserTask>(url, {params, headers});
  }

    save(entity: UserTask): Observable<UserTask> {
      let url = this.baseApiUrl;
      const headers = new HttpHeaders().set('Accept', 'application/json');

      if ( entity.id ) {
        url = this.baseApiUrl + entity.id + '/';
        return this.http.put<UserTask>(url, entity, {headers});
      } else {
        return this.http.post<UserTask>(url, entity, {headers});
      }
    }
}

