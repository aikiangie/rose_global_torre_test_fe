import { UserTask } from './user-task';
import { UserTaskFilter } from './user-task-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class UserTaskService {
    
    constructor(private http: HttpClient) {
    }

    userTaskList: UserTask[] = [];
  
    findById(id: string): Observable<UserTask> {
        let url = 'http://langelicajr.pythonanywhere.com/userTask/'; 
        let params = { "id": id };
        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');
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
        )
    }

    find(filter: UserTaskFilter): Observable<UserTask[]> {
        let url = 'http://langelicajr.pythonanywhere.com/userTask/';
        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        let params = {
            "description": filter.description,
        };

        return this.http.get<UserTask[]>(url, {params, headers});
    }

    save(entity: UserTask): Observable<UserTask> {
        let url = 'http://langelicajr.pythonanywhere.com/userTask/';
        let headers = new HttpHeaders()
            .set('Accept', 'application/json');
        return this.http.post<UserTask>(url, entity, {headers});
    }
}

