import { Injectable } from '@angular/core';
import { JOBS } from 'src/data';
import { JobInterface } from 'src/interface';
import { Logger } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {

  constructor(private logs :Logger) { }

  getData():JobInterface[]{
    this.logs.log("Generating data..")
    return JOBS.slice(0,3);
  }
}
