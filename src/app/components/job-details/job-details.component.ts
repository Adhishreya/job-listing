import { Component, OnInit, Input } from '@angular/core';
import { JobInterface } from 'src/interface';
import { Observable, Subscription } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { JobFetchService } from 'src/app/services/job-fetch.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {
  @Input() jobItemDetail!: JobInterface;

  constructor(private router: ActivatedRoute,
    private jobService: JobFetchService) { };

  id!: number;
  jobDetail!: JobInterface;

  ngOnInit(): void {
    this.id = parseInt(this.router.snapshot.paramMap.get('id')!);
    this.jobService.getJobById(this.id).subscribe((job)=>this.jobDetail=job);
  }

}
