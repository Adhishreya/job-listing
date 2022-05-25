import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  id: string = ''
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.id)
  }

}
