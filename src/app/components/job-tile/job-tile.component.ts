import { Component, OnInit, Input } from '@angular/core';
import { JobInterface } from '../../../interface';

@Component({
  selector: 'app-job-tile',
  templateUrl: './job-tile.component.html',
  styleUrls: ['./job-tile.component.scss']
})
export class JobTileComponent implements OnInit {
  //Input is used to get data(property value) from the parent component
  @Input() jobItem !: JobInterface
  constructor() { }

  ngOnInit(): void {
  }

}
