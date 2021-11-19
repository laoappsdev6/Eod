import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferNewRoutingModule } from './transfer-new-routing.module';
import { TransferNewComponent } from './transfer-new.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TransferNewComponent
  ],
  imports: [
    CommonModule,
    TransferNewRoutingModule,
    FormsModule
  ]
})
export class TransferNewModule { }
