import { TestBed } from '@angular/core/testing';

import { AccessControlGuard } from './access-control.guard';

describe('AccessControlGuard', () => {
  let guard: AccessControlGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccessControlGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
