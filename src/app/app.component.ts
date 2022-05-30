import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router : Router){
  }

  hasRoute(route:string){
    return this.router.url === route;
  }

  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
