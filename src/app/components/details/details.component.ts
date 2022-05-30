import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { JobFetchService } from 'src/app/services/job-fetch.service';
import { JobInterface } from 'src/interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  job! : JobInterface;

  constructor(private route : ActivatedRoute,
              private serviceDetails:JobFetchService) { }

  ngOnInit(): void {
    let id :number = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.serviceDetails.getJobById(id).subscribe(job=>this.job=job);
  }

}
