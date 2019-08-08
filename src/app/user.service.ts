import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { User } from './user';
import { USERS } from './mock-users';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers(): Observable<User[]> {
    this.messageService.add('USerService: fetched users');
    return of(USERS);
  }
  constructor(private messageService: MessageService) { }
}
