import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {

  @Input() filter!: string;

  @Output() removeFilter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  clearFilterValue(value: string) {
    // console.log(value);
    this.removeFilter.emit(value);
  }
}
