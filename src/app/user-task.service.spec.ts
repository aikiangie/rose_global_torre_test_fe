import { TestBed } from '@angular/core/testing';

import { UserTaskService } from './user-task.service';

describe('UserTaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserTaskService = TestBed.get(UserTaskService);
    expect(service).toBeTruthy();
  });
});
