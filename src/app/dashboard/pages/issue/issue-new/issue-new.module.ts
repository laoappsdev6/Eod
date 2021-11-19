import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssueNewRoutingModule } from './issue-new-routing.module';
import { IssueNewComponent } from './issue-new.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IssueNewComponent
  ],
  imports: [
    CommonModule,
    IssueNewRoutingModule,
    FormsModule
  ]
})
export class IssueNewModule { }
