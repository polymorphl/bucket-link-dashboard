import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  HomeComponent as HomePage,
  BucketsComponent as BucketsPage,
  BucketComponent as BucketPage,
  LinksComponent as LinksPage,
  UsersComponent as UsersPage,
  UserComponent as UserPage
} from './pages';

const routes: Routes = [
  // Default
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'users', component: UsersPage },
  { path: 'user/:id', component: UserPage },
  { path: 'buckets', component: BucketsPage },
  { path: 'bucket/:id', component: BucketPage },
  { path: 'links', component: LinksPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule { }
