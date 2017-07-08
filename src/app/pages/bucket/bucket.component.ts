import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DashboardService } from '../../';

@Component({
  selector: 'dashboard-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.scss']
})
export class BucketComponent {

  public bucket: any;
  public bucketSub: any;

  constructor(
    private _router: Router,
    private _dashboard: DashboardService
    ) {}


  ngOnInit(): void {
    this.bucketSub = this._dashboard.getBucket(1).subscribe(resp => this.bucket = resp.data);
  }

  ngOnDestroy(): void {
    if (this.bucketSub) this.bucketSub.unsubscribe();
  }

  goToUser(id: number): void {
    this._router.navigate(['/user', {id: id}]);
  }
  
}