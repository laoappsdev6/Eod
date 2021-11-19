import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from '../../services/api.service';
import { PaginationService } from '../../services/pagination.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    issuerBalance: string;
    issuedBalance: string;
    expendBalance: string;

    issuedlists: any;
    expendLists: any;

    constructor(private spinner: NgxSpinnerService, private api: ApiService, private pagination: PaginationService) { }

    ngOnInit(): void {
        this.ShowAllBalance();
    }

    ShowAllBalance() {
        this.spinner.show();
        this.api.ShowIssuerBalance().subscribe(issuerBalance => {
            this.api.ShowIssuerIssuedBalance().subscribe(issuedBalance => {
                this.api.ShowIssuerExpendBalance().subscribe(expendBalance => {
                    this.issuerBalance = issuerBalance.info.totalBalance;
                    this.issuedBalance = issuedBalance.info.totalIssueBalance;
                    this.expendBalance = expendBalance.info.totalExpendBalance;
                    if (issuerBalance.status == 1 && issuedBalance.status == 1) {
                        const data: any = { page: 1, limit: 3 };
                        this.api.ShowIssuerHistoryIssued(data).subscribe(issuerHistoryIssued => {
                            if (issuerHistoryIssued.status == 1) {
                                this.issuedlists = issuerHistoryIssued.info.historyIssued;
                                this.api.ShowIssuerHistoryExpend(data).subscribe(issuerHistoryExpend => {
                                    this.expendLists = issuerHistoryExpend.info.historyExpend;
                                    this.spinner.hide();
                                })
                            }
                        });
                    }
                });
            });
        });
    }

}
