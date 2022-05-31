import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, Router, ActivatedRoute, RouterModule } from '@angular/router';

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
import { DetailsComponent } from './components/details/details.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ConvertDataPipe } from './pipes/convert-data.pipe';

const routerConfigs: Routes = [
  {path:'job-list/details/:id',component:DetailsComponent},
  {path:'job-list',component:JobListsComponent},
  {path:'messages',component:RatingComponent},
  {path:'register',component:RegisterComponent},
  {path:'',redirectTo:'/job-list',pathMatch:"full"},
  {path:'**',component:PageNotFoundComponent}
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
    SalaryPipePipe,
    HighlightDirective,
    FilterBarComponent,
    DetailsComponent,
    RegisterComponent,
    ConvertDataPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,//required to use HttpClient
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routerConfigs,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
