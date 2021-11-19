import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/dashboard/services/api.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-transfer-new',
    templateUrl: './transfer-new.component.html',
    styleUrls: ['./transfer-new.component.scss']
})
export class TransferNewComponent implements OnInit {

    issuerBalance: number;
    expendBalance: number;

    phoneDestination: string = '';
    transferValue: string = '';

    constructor(private spinner: NgxSpinnerService, private api: ApiService) { }

    ngOnInit(): void {
        this.ShowAllBalance();
    }

    ShowAllBalance() {
        this.spinner.show();
        this.api.ShowIssuerBalance().subscribe(issuerBalance => {
            this.api.ShowIssuerExpendBalance().subscribe(issuedBalance => {
                this.issuerBalance = issuerBalance.info.totalBalance;
                this.expendBalance = issuedBalance.info.totalExpendBalance;
                if (issuerBalance.status == 1 && issuedBalance.status == 1) {
                    this.spinner.hide();
                }
            });
        });
    }

    Transfer() {
        if (this.phoneDestination == '') {
            Swal.fire({
                icon: 'warning',
                iconColor: '#DC3545',
                title: 'Notification',
                html: 'Please enter any phone destination',
                showConfirmButton: true,
                confirmButtonText: 'OK',
                confirmButtonColor: '#DC3545'
            });
        } else if (this.transferValue == '') {
            Swal.fire({
                icon: 'warning',
                iconColor: '#DC3545',
                title: 'Notification',
                html: 'Please enter any transfer value',
                showConfirmButton: true,
                confirmButtonText: 'OK',
                confirmButtonColor: '#DC3545'
            });
        } else {
            this.spinner.show();
            let data: any = {
                recv: this.phoneDestination,
                value: this.transferValue
            }
            console.log(data);

            this.api.IssuerTransfer(data).subscribe(transfer => {
                if (transfer.status == 1) {
                    Swal.fire({
                        icon: 'success',
                        iconColor: '#3880FF',
                        title: 'Notification',
                        html: 'Transfer new success',
                        showConfirmButton: true,
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#3880FF'
                    });

                    this.issuerBalance = this.issuerBalance + parseFloat(this.transferValue);
                    this.expendBalance = this.expendBalance + parseFloat(this.transferValue);
                    this.phoneDestination = '';
                    this.transferValue = '';
                } else {
                    Swal.fire({
                        icon: 'warning',
                        iconColor: '#DC3545',
                        title: 'Notification',
                        html: 'Fail ' + transfer.message,
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
