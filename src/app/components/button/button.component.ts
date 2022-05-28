import { Component, OnInit, Input, Output, EventEmitter, SimpleChange, OnChanges, SimpleChanges } from '@angular/core';

@Component({ //a directive to define components
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text!: string;
  @Input() className!: string;
  @Output() btnClick = new EventEmitter();//can be used when the componenet is being re-used and in each instance it has a different function
  //since it is declared as an Output()  it implies that the event triggers the parent component
  constructor() { }
  // ngOnChanges(changes: SimpleChanges): void {
  //   // throw new Error('Method not implemented.');
  //   console.log('the changes are');
  //   console.log(changes)
  // }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit();
  }
}
