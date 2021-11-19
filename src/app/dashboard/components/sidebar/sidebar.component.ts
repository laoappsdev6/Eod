import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    @Input() toggleState: any;

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    RouterLinkToHome() { this.router.navigate(['dashboard/home']); }
    RouterLinkToIssue() { this.router.navigate(['dashboard/issue']); }
    RouterLinkToTransfer() { this.router.navigate(['dashboard/transfer']); }
    RouterLinkToOptions() { this.router.navigate(['dashboard/options']); }

}
