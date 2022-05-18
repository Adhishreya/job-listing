import { Injectable } from '@angular/core';
import { JobInterface } from '../../interface';
import { JOBS } from '../../data';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class JobFetchService {
  private apiUrl = 'http://localhost:5000/jobs'

  constructor(private httpClient: HttpClient)//fetches data from external api in streams
   { }

  getJobs(): Observable<JobInterface[]> {
    //observables are often subscribed to track changes
    return this.httpClient.get<JobInterface[]>(this.apiUrl)
  }
}
