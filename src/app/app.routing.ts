import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  HomeComponent as HomePage,
  BucketsComponent as BucketsPage,
  LinksComponent as LinksPage,
  UsersComponent as UsersPage
} from './pages';

const routes: Routes = [
  // Default
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'users', component: UsersPage },
  { path: 'buckets', component: BucketsPage },
  { path: 'links', component: LinksPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule { }
