import { Injectable } from '@angular/core';
import {UserTask} from './userTask';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserTaskService {

  private apiUrl = 'http://langelicajr.pythonanywhere.com/userTask/';

  getUserTasks(): Observable<UserTask[]> {
    return this.httpClient.get<UserTask[]>(this.apiUrl);
  }

  constructor(private httpClient: HttpClient) { }
}
