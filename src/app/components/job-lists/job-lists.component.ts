import { Component, OnInit } from '@angular/core';
import { JobInterface } from '../../../interface';
import { JobFetchService } from '../../services/job-fetch.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-job-lists',
  templateUrl: './job-lists.component.html',
  styleUrls: ['./job-lists.component.scss']
})
export class JobListsComponent implements OnInit {
  jobs: JobInterface[] = [];
  //injecting the service into the component
  constructor(private jobList: JobFetchService,
    private route: ActivatedRoute) { }

  name: string = '';

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'))

    this.jobList.getJobs().subscribe((job) => this.jobs = job);
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    })
  }
  // addFilterItem(filter: string) {
  //   this.filters.push(filter);
  //   console.log(this.filters)
  // }
  routeDetails(job: JobInterface) {
    // this.jobList.getJobById(job.id!).subscribe((jobItem) => console.log(jobItem))
  }
} 
