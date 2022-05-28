import { TestBed } from '@angular/core/testing';

import { HttpFetchService } from './http-fetch.service';

describe('HttpFetchService', () => {
  let service: HttpFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
