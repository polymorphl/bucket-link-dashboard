import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'dashboard-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss']
})

export class TopBarComponent {

    private focus: boolean = false;

    constructor(private _router: Router) {}

    public navigateToBuckets(): void {
        this._router.navigate(['/buckets']);
    }

    public navigateToHome(): void {
        this._router.navigate(['/home']);
    }
        
}