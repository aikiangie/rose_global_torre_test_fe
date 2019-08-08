import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserTaskService } from '../user-task.service';
import { UserTask } from '../user-task';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'user-task-edit',
  templateUrl: './user-task-edit.component.html'
})
export class UserTaskEditComponent implements OnInit {

    id: string;
    userTask: UserTask;
    errors: string;

    constructor(
        private route: ActivatedRoute,
        private userTaskService: UserTaskService) { 
    }

    ngOnInit() {
        this
            .route
            .params
            .pipe(
                map(p => p['id']),
                switchMap(id => {
                    if (id === 'new') return of(new UserTask());
                    return this.userTaskService.findById(id)
                })
            )
            .subscribe(
                userTask => { 
                    this.userTask = userTask; 
                    this.errors = ''; 
                },
                err => { 
                    this.errors = 'Error loading'; 
                }
            );
    }

    save() {
        this.userTaskService.save(this.userTask).subscribe(
            userTask => { 
                this.userTask = userTask; 
                this.errors = 'Save was successful!'; 
            },
            err => { 
                this.errors = 'Error saving'; 
            }
        );
    }
}