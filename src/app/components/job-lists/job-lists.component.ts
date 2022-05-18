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
  constructor(private jobLIst: JobFetchService) { }

  ngOnInit(): void {
    this.jobs = this.jobLIst.getJobs();
  }

}
