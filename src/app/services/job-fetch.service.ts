import { Injectable } from '@angular/core';
import { JobInterface } from '../../interface';
import { JOBS } from '../../data';
import { Observable,of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JobFetchService {

  constructor() { }

  getJobs(): Observable<JobInterface[]> {
    //observables are often subscribed to track changes
    const jobs = of(JOBS);
    return jobs
  }
}
