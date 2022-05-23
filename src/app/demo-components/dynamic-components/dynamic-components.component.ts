import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Items, JobInterface } from 'src/interface';
import { PracticeService } from 'src/app/services/practice.service';

@Component({
  selector: 'app-dynamic-components',
  templateUrl: './dynamic-components.component.html',
  styleUrls: ['./dynamic-components.component.scss']
})
export class DynamicComponentsComponent implements OnInit {

  name = "";



  array: Items[] = [{ id: 1, name: "apple" }, { id: 2, name: "samung" }, { id: 3, name: "pixel" }, { id: 4, name: "sony" }];

  switchVariableTrial: string = "ipad";

  detectChange(event: string) {
    console.log(event)
  }
  currencyClass = {
    dollar: true
  }
  colspan = "2";

  data: JobInterface[] = [];

  trackByItems(index: number, item: Items): number { return item.id }

  constructor(private dataService: PracticeService) { }

  ngOnInit(): void {
    this.data = this.dataService.getData();
    console.log(this.data)
  }

}