import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTaskDetailComponent } from './user-task-detail.component';

describe('UserTaskDetailComponent', () => {
  let component: UserTaskDetailComponent;
  let fixture: ComponentFixture<UserTaskDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTaskDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTaskDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
