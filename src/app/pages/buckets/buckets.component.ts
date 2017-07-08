import { Component } from '@angular/core';

import { DashboardService } from '../../';

@Component({
  selector: 'dashboard-buckets',
  templateUrl: './buckets.component.html',
  styleUrls: ['./buckets.component.scss']
})
export class BucketsComponent {

  public buckets: any;
  public bucketsSub: any;

  constructor(private _dashboard: DashboardService) {}

  
  ngOnInit(): void {
    this.bucketsSub = this._dashboard.getBuckets().subscribe(resp => this.buckets = resp.data);
  }

  ngOnDestroy(): void {
    if (this.bucketsSub) this.bucketsSub.unsubscribe();
  }
  
}