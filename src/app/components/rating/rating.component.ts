import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  display!:number;
  value!: number;
  constructor() { }

  array = Array<number>(5).keys();

  ngOnInit(): void {
  }
  getValue(val: any) {
    console.log(val + 1)
  }
  onSubmit(){
    // this.value;
    console.log(this.value)
    this.display=this.value;
  }
}
