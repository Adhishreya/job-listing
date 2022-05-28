import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JobInterface } from '../../../interface';

@Component({
  selector: 'app-job-tile',
  templateUrl: './job-tile.component.html',
  styleUrls: ['./job-tile.component.scss']
})
export class JobTileComponent implements OnInit {
  //Input is used to get data(property value) from the parent component
  @Input() jobItem !: JobInterface
  @Output() jobDetails: EventEmitter<JobInterface> = new EventEmitter();

  constructor() { }
  filters: string[] = [];
  ngOnInit(): void {
  }
  addFilter(tool: string) {
    // this.addFilterArray.emit(tool)
    if (!this.filters.includes(tool))
      this.filters.push(tool)
    console.log(this.filters)
  }

  fetchDetails(jobItem: JobInterface) {
    // console.log(jobItem)
    this.jobDetails.emit(jobItem);
  }
} 
