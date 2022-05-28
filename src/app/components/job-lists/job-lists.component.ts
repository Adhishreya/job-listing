import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { JobInterface } from '../../../interface';
import { JobFetchService } from '../../services/job-fetch.service';
@Component({
  selector: 'app-job-lists',
  templateUrl: './job-lists.component.html',
  styleUrls: ['./job-lists.component.scss']
})
export class JobListsComponent implements OnInit {
  jobs: JobInterface[] = [];
  filters: string[] = [];
  // filter!: string;
  filterValue!: string;
  //injecting the service into the component
  constructor(private jobLIst: JobFetchService) { }

  ngOnInit(): void {
    this.jobLIst.getJobs().subscribe((job) => this.jobs = job);
  }
  // addFilterItem(filter: string) {
  //   this.filters.push(filter);
  //   console.log(this.filters)
  // }
  checkFilter(value: string) {
    // console.log(value);
    if (!this.filters.includes(value))
      this.filters.push(value);
    console.log(this.filters);
  }

  clearFilter() {
    // console.log('fire clear')
    this.filters = [];
  }
  removeFilter(event: string) {
    this.filters = this.filters.filter((val) => val !== event);
  }

}
