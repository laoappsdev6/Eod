import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListModule) },
  { path: 'issue-new', loadChildren: () => import('./issue-new/issue-new.module').then(m => m.IssueNewModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssueRoutingModule { }
