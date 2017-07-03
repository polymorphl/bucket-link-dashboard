import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  HomeComponent as HomePage
} from './pages';

const routes: Routes = [
  // Default
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule { }
