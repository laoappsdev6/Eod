import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    toggleState: boolean = false;
    @Output() toggleAnimate: any = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit(): void {
    }

    Toggle() {
        if (this.toggleState == false) {
            this.toggleState = true;
            this.toggleAnimate.emit(true);
        } else {
            this.toggleState = false;
            this.toggleAnimate.emit(false);
        }
    }

}
