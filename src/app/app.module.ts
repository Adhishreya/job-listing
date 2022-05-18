import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { JobListsComponent } from './components/job-lists/job-lists.component';
import { JobTileComponent } from './components/job-tile/job-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    JobListsComponent,
    JobTileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule//required to use HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
