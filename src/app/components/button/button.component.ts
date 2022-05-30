import { Component, OnInit, Input, Output, EventEmitter, SimpleChange } from '@angular/core';

@Component({ //a directive to define components
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text!: string;
  @Input() className!: string;
  @Input() value!:string;
  @Output() btnClick = new EventEmitter();//can be used when the componenet is being re-used and in each instance it has a different function
  //since it is declared as an Output()  it implies that the event triggers the parent component
  constructor() { }
  

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit();
  }

  // ngChanges(changes: SimpleChange) {
  //   console.log('the changes are');
  //   console.log(changes)
  // }
}
