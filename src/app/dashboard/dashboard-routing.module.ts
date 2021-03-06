import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
      { path: 'issue', loadChildren: () => import('./pages/issue/issue.module').then(m => m.IssueModule) },
      { path: 'transfer', loadChildren: () => import('./pages/transfer/transfer.module').then(m => m.TransferModule) },
      { path: 'options', loadChildren: () => import('./pages/options/options.module').then(m => m.OptionsModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
