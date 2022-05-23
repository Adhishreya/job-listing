import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { JobListsComponent } from './components/job-lists/job-lists.component';
import { JobTileComponent } from './components/job-tile/job-tile.component';
import { ModalComponent } from './components/modal/modal.component';
import { RatingComponent } from './components/rating/rating.component';
import { DynamicComponentsComponent } from './demo-components/dynamic-components/dynamic-components.component';
import { SalaryPipePipe } from './pipes/salary-pipe.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { SignUpComponent } from './comopnents/sign-up/sign-up.component';

const appRoutes :Routes = [
  {path:'signup', component:SignUpComponent},
  {path:'job-apply',component:JobListsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    JobListsComponent,
    JobTileComponent,
    ModalComponent,
    RatingComponent,
    DynamicComponentsComponent,
    SalaryPipePipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,//required to use HttpClient
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
