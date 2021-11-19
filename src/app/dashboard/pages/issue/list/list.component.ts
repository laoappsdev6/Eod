import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/dashboard/services/api.service';
import { PaginationService } from 'src/app/dashboard/services/pagination.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    issuerBalance: string;
    issuedBalance: string;

    lists: any;
    btns: any;

    constructor(private spinner: NgxSpinnerService, private api: ApiService, private pagination: PaginationService) { }

    ngOnInit(): void {
        this.ShowAllBalance(1);
    }

    ShowAllBalance(page: number) {
        this.spinner.show();
        const rowsLimit = localStorage.getItem('rows_limit');
        this.api.ShowIssuerBalance().subscribe(issuerBalance => {
            this.api.ShowIssuerIssuedBalance().subscribe(issuedBalance => {
                this.issuerBalance = issuerBalance.info.totalBalance;
                this.issuedBalance = issuedBalance.info.totalIssueBalance;
                if (issuerBalance.status == 1 && issuedBalance.status == 1) {
                    const data: any = { page: page, limit: rowsLimit };
                    this.api.ShowIssuerHistoryIssued(data).subscribe(issuerHistoryIssued => {
                        if (issuerHistoryIssued.status == 1) {
                            this.lists = issuerHistoryIssued.info.historyIssued;
                            this.btns = this.pagination.paginate(page, Math.ceil(parseFloat(issuerHistoryIssued.info.totalRows) / parseFloat(rowsLimit)));
                            (document.querySelector(`.rows-count`)).textContent = issuerHistoryIssued.info.totalRows;
                            this.spinner.hide();
                        }
                    });
                }
            });
        });
    }

}
