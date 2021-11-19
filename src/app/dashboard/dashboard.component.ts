import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    toggleState: any;

    constructor() { }

    ngOnInit(): void {
    }

    Toggle(e: boolean) {
        this.toggleState = e;
    }

}
