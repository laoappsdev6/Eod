import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/dashboard/services/api.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-issue-new',
    templateUrl: './issue-new.component.html',
    styleUrls: ['./issue-new.component.scss']
})
export class IssueNewComponent implements OnInit {

    issuerBalance: number;
    issuedBalance: number;

    issueValue: string = '';

    constructor(private spinner: NgxSpinnerService, private api: ApiService) { }

    ngOnInit(): void {
        this.ShowAllBalance();
    }

    ShowAllBalance() {
        this.spinner.show();
        this.api.ShowIssuerBalance().subscribe(issuerBalance => {
            this.api.ShowIssuerIssuedBalance().subscribe(issuedBalance => {
                this.issuerBalance = issuerBalance.info.totalBalance;
                this.issuedBalance = issuedBalance.info.totalIssueBalance;
                if (issuerBalance.status == 1 && issuedBalance.status == 1) {
                    this.spinner.hide();
                }
            });
        });
    }

    Issue() {
        if (this.issueValue == '') {
            Swal.fire({
                icon: 'warning',
                iconColor: '#DC3545',
                title: 'Notification',
                html: 'Please enter any issue value',
                showConfirmButton: true,
                confirmButtonText: 'OK',
                confirmButtonColor: '#DC3545'
            });
        } else if (parseFloat(this.issueValue) < 50000) {
            Swal.fire({
                icon: 'warning',
                iconColor: '#DC3545',
                title: 'Notification',
                html: 'You can issue lester 50,000 LAK',
                showConfirmButton: true,
                confirmButtonText: 'OK',
                confirmButtonColor: '#DC3545'
            });
        } else if (parseFloat(this.issueValue) > 1000000000) {
            Swal.fire({
                icon: 'warning',
                iconColor: '#DC3545',
                title: 'Notification',
                html: 'You can issue more than 1,000,000,000 LAK',
                showConfirmButton: true,
                confirmButtonText: 'OK',
                confirmButtonColor: '#DC3545'
            });
        } else {
            this.spinner.show();
            this.api.IssueNew({ value: this.issueValue }).subscribe(issue => {
                if (issue.status == 1) {
                    this.issuerBalance = this.issuerBalance + parseFloat(this.issueValue);
                    this.issuedBalance = this.issuedBalance + parseFloat(this.issueValue);
                    this.issueValue = '';
                    Swal.fire({
                        icon: 'success',
                        iconColor: '#3880FF',
                        title: 'Notification',
                        html: 'Issue new success',
                        showConfirmButton: true,
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#3880FF'
                    });

                } else {
                    Swal.fire({
                        icon: 'warning',
                        iconColor: '#DC3545',
                        title: 'Notification',
                        html: 'Fail ' + issue.message,
                        showConfirmButton: true,
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#DC3545'
                    });
                }

                this.spinner.hide();
            });
        }
    }

}
