import { Component } from '@angular/core';

import { DashboardService } from '../../';

@Component({
  selector: 'dashboard-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent {

  public links: any;
  public linksSub: any;

  constructor(private _dashboard: DashboardService) {}

  
  ngOnInit(): void {
    this.linksSub = this._dashboard.getLinks().subscribe(resp => this.links = resp.data);
  }

  ngOnDestroy(): void {
    if (this.linksSub) this.linksSub.unsubscribe();
  }
  
}