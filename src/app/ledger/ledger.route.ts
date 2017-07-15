import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LedgerComponent } from './ledger.component';
import { LedgerTransactionsComponent } from './ledger-transactions/ledger-transactions.component';
import { LedgerCategoryComponent } from './ledger-category/ledger-category.component';

const routes: Routes = [
  { path: '', component: LedgerComponent },

  { path: 'transactions', component: LedgerTransactionsComponent },

  { path: 'category', component: LedgerCategoryComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LedgerRoutingModule { }

export const routedComponents = [LedgerComponent, LedgerCategoryComponent,  LedgerTransactionsComponent];
