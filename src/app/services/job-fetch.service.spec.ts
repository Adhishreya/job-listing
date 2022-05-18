import { TestBed } from '@angular/core/testing';

import { JobFetchService } from './job-fetch.service';

describe('JobFetchService', () => {
  let service: JobFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
