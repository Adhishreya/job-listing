import { Component, OnInit, Input } from '@angular/core';
import { JobInterface } from 'src/interface';

// import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {
  @Input() jobItemDetail!: JobInterface;
  
  constructor() { };

  ngOnInit(): void {
  }

}
