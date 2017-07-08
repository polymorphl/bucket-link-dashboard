import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SidebarModule } from 'ng-sidebar';

// Local router
import { RoutingModule } from './app.routing';

import {
    TopBarComponent,
    HttpService, DashboardService
} from  './index';

import {
  HomeComponent,
  BucketsComponent,
  LinksComponent,
  UsersComponent
} from './pages';

import { AppComponent } from './__app/app.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    BucketsComponent,
    LinksComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SidebarModule.forRoot(),
    RoutingModule
  ],
  providers: [
    HttpService,
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
