import {Injectable} from '@angular/core'
import {Router} from "@angular/router";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { HttpService } from './http.service';

@Injectable()
export class DashboardService {

  constructor(
    private _http: HttpService,
    private _router: Router
  ) { }

  getMetrics(): Observable<any> {
    return this._http.get('/admin').flatMap((resp) => {
      return Observable.of(resp);
    });
  }

  getUsers(): Observable<any> {
    return this._http.get('/admin/users').flatMap((resp) => {
      return Observable.of(resp);
    });
  }

   getUser(id: number): Observable<any> {
    return this._http.get(`/admin/users/${id}`).flatMap((resp) => {
      return Observable.of(resp);
    });
  }

  getBuckets(): Observable<any> {
    return this._http.get('/admin/buckets').flatMap((resp) => {
      return Observable.of(resp);
    });
  }

  getBucket(id: number): Observable<any> {
    return this._http.get(`/admin/buckets/${id}`).flatMap((resp) => {
      return Observable.of(resp);
    });
  }

  getLinks(): Observable<any> {
    return this._http.get('/admin/links').flatMap((resp) => {
      return Observable.of(resp);
    });
  }

  // END GET
  // BEGIN POST

  createUser(data): Observable<any> {
     return this._http.post('/admin/users', data).flatMap((resp) => {
      return Observable.of(resp);
    });
  }

  createBucket(data): Observable<any> {
     return this._http.post('/admin/buckets', data).flatMap((resp) => {
      return Observable.of(resp);
    });
  }

  createLink(data): Observable<any> {
     return this._http.post('/admin/links', data).flatMap((resp) => {
      return Observable.of(resp);
    });
  }

  // END POST
  // BEGIN PATCH


  updateUser(id: number, data): Observable<any> {
    return this._http.patch(`/admin/users/${id}`, data).flatMap((resp) => {
      return Observable.of(resp);
    });
  }

  updateBucket(id: number, data): Observable<any> {
    return this._http.patch(`/admin/buckets${id}`, data).flatMap((resp) => {
      return Observable.of(resp);
    });
  }

  updateLink(id: number, data): Observable<any> {
    return this._http.patch(`/admin/links/${id}`, data).flatMap((resp) => {
      return Observable.of(resp);
    });
  }

  // END PATCH
  // BEGIN DELETE

  deleteUser(id: number): Observable<any> {
    return this._http.delete(`/admin/users/${id}`).flatMap((resp) => {
      return Observable.of(resp);
    });
  }

  deleteBucket(id: number): Observable<any> {
    return this._http.delete(`/admin/buckets${id}`).flatMap((resp) => {
      return Observable.of(resp);
    });
  }

  deleteLink(id: number): Observable<any> {
    return this._http.delete(`/admin/links/${id}`).flatMap((resp) => {
      return Observable.of(resp);
    });
  }


}