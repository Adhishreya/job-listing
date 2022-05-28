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
  filterValue!: string;
  //injecting the service into the component
  constructor(private jobLIst: JobFetchService) { }

  ngOnInit(): void {
    // this.jobLIst.getJobs().subscribe((job) => this.jobs = job);
    this.fetchData();
  }


  applyFilter(operation: string, value?: string) {
    if (operation === "add") {
      this.jobs = this.jobs.filter((job) => {
        if (job.tools?.includes(value!) || job.role?.includes(value!) || job.level?.includes(value!) || job.languages?.includes(value!))
          return true;
        return false;
      });
    }
    else {
      // this.jobs = this.jobs.filter((job) => {
      //   let present = false;

      //   this.filters.every((element: string) => {
      //     if (job.tools?.includes(element) || job.role?.includes(element) || job.level?.includes(element) || job.languages?.includes(element)) {
      //       present = true;
      //     }
      //   });
      //   return present;
      // })
      this.filters.every((filterElement) => {
        this.jobs = this.jobs.filter((job) => {
          if (job.tools?.includes(filterElement) || job.role?.includes(filterElement) || job.level?.includes(filterElement) || job.languages?.includes(filterElement)) {
            return true;
          }
          return false;
        })
      })
    }
  }

  checkFilter(value: string) {
    if (!this.filters.includes(value)) {
      this.filters.push(value);
      this.applyFilter("add", value);
    }
  }
  fetchData() {
    this.jobLIst.getJobs().subscribe((job) => this.jobs = job);
  }
  clearFilter() {
    this.filters = [];
    this.fetchData();
  }
  removeFilter(event: string) {
    this.filters = this.filters.filter((val) => val !== event);
    this.jobs = []
    // this.fetchData();
    // if (this.filters.length !== 0)
    //   setTimeout(()=>this.applyFilter("remove"),10000);

    this.jobLIst.getJobs().subscribe((job) => {
      this.jobs = job;
      if (this.filters.length !== 0)
        this.applyFilter("remove")
    }
    );


  }

}
