import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { JobListsComponent } from './components/job-lists/job-lists.component';
import { JobTileComponent } from './components/job-tile/job-tile.component';
import { ModalComponent } from './components/modal/modal.component';
import { RatingComponent } from './components/rating/rating.component';
import { SalaryPipePipe } from './pipes/salary-pipe.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    JobListsComponent,
    JobTileComponent,
    ModalComponent,
    RatingComponent,
    SalaryPipePipe,
    HighlightDirective,
    FilterBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,//required to use HttpClient
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
