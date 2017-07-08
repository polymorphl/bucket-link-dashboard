import { Component, OnInit, OnDestroy } from '@angular/core';

import { DashboardService } from '../../';

@Component({
  selector: 'dashboard-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  public users: any;
  public usersSub: any;

  constructor(private _dashboard: DashboardService) {
    
  }

  ngOnInit(): void {
    this.usersSub = this._dashboard.getUsers().subscribe(resp => this.users = resp.data);
  }

  ngOnDestroy(): void {
    if (this.usersSub) this.usersSub.unsubscribe();
  }
  
}