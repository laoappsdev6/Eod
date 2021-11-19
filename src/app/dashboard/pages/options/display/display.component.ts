import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-display',
    templateUrl: './display.component.html',
    styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

    rowsLimit: any;

    constructor() { }

    ngOnInit(): void {
        this.LoadRowsLimit();
    }

    LoadRowsLimit() {
        const limit = localStorage.getItem('rows_limit');
        if (limit) {
            this.rowsLimit = limit;
        } else {
            localStorage.setItem('rows_limit', '5');
            this.rowsLimit = '5';
        }
    }

    ChangeRowsLimit(e: Event) {
        const value = (e.target as HTMLSelectElement).value;
        localStorage.setItem('rows_limit', value);
    }

}
