import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueNewComponent } from './issue-new.component';

const routes: Routes = [
  { path: '', component: IssueNewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssueNewRoutingModule { }
