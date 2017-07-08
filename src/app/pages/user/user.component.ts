import { Component, OnInit, OnDestroy } from '@angular/core';

import { DashboardService } from '../../';

@Component({
  selector: 'dashboard-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  public user: any;
  public userSub: any;

  constructor(private _dashboard: DashboardService) {
    
  }

  ngOnInit(): void {
    // TODO make functional
    this.userSub = this._dashboard.getUser(1).subscribe(resp => this.user = resp.data);
  }

  ngOnDestroy(): void {
    if (this.userSub) this.userSub.unsubscribe();
  }
  
}