import { Injectable } from '@angular/core';
import { JobInterface } from '../../interface';
import { JOBS } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class JobFetchService {

  constructor() { }

  getJobs(): JobInterface[] {
    return JOBS
  }
}
