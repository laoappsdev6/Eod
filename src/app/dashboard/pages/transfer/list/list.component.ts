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
    expendBalance: string;

    lists: any;
    btns: any;

    constructor(private spinner: NgxSpinnerService, private api: ApiService, private pagination: PaginationService) { }

    ngOnInit(): void {
        this.ShowAllBalance(1);
    }

    ShowAllBalance(page: number) {
        this.spinner.show();
        this.api.ShowIssuerBalance().subscribe(issuerBalance => {
            this.api.ShowIssuerExpendBalance().subscribe(issuedBalance => {
                this.issuerBalance = issuerBalance.info.totalBalance;
                this.expendBalance = issuedBalance.info.totalExpendBalance;
                if (issuerBalance.status == 1 && issuedBalance.status == 1) {
                    const data: any = { page: page, limit: 5 };
                    this.api.ShowIssuerHistoryExpend(data).subscribe(issuerHistoryExpend => {
                        if (issuerHistoryExpend.status == 1) {
                            this.lists = issuerHistoryExpend.info.historyExpend;
                            this.btns = this.pagination.paginate(page, Math.ceil(parseFloat(issuerHistoryExpend.info.totalRows) / 5));
                            (document.querySelector(`.rows-count`)).textContent = issuerHistoryExpend.info.totalRows;
                            this.spinner.hide();
                        }
                    });
                }
            });
        });
    }

}
