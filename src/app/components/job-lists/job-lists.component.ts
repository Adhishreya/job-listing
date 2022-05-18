import { Component, OnInit } from '@angular/core';
import { JobInterface } from '../../../interface';
// import { JOBS } from '../../../data';
import { JobFetchService } from '../../services/job-fetch.service';
@Component({
  selector: 'app-job-lists',
  templateUrl: './job-lists.component.html',
  styleUrls: ['./job-lists.component.scss']
})
export class JobListsComponent implements OnInit {
  jobs: JobInterface[] = [];
  filters: string[] = [];
  filter!: string;
  //injecting the service into the component
  constructor(private jobLIst: JobFetchService) { }

  ngOnInit(): void {
    this.jobLIst.getJobs().subscribe((job) => this.jobs = job);
  }
  addFilterItem(filter: string) {
    this.filters.push(filter);
    console.log(this.filters)
  }

}
