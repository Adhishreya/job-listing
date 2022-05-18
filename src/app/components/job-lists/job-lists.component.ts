import { Component, OnInit } from '@angular/core';
import { JobInterface } from '../../../interface';
import { JOBS } from '../../../data';
@Component({
  selector: 'app-job-lists',
  templateUrl: './job-lists.component.html',
  styleUrls: ['./job-lists.component.scss']
})
export class JobListsComponent implements OnInit {
  jobs: JobInterface[] = JOBS;
  constructor() { }

  ngOnInit(): void {
  }

}
