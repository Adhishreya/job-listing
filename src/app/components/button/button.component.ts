import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({ //a directive to define components
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text!: string;
  @Input() className!: string;
  @Output() btnClick = new EventEmitter();//can be used when the componenet is being re-used and in each instance it has a different function
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit();
  }
}
