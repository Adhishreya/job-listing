import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = 'Job Listing';
  constructor() { }

  //lifecycle method must be used whenever anything has to be initialized
  ngOnInit(): void {
  }


}
