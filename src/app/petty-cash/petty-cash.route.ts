import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PettyCashLedgerComponent } from './petty-cash-ledger/petty-cash-ledger.component';
import { PettyCashFundsTransactionsComponent } from './petty-cash-funds-transactions/petty-cash-funds-transactions.component';
import { PettyCashLedgerTransactionsComponent } from './petty-cash-ledger-transactions/petty-cash-ledger-transactions.component';



const routes: Routes = [
   { path: '', pathMatch: 'full', redirectTo: 'ledger-transactions' },
   { path: 'ledger', component: PettyCashLedgerComponent },
   { path: 'funds-transactions', component: PettyCashFundsTransactionsComponent },
   { path: 'ledger-transactions', component: PettyCashLedgerTransactionsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PettyCRoutingModule { }

export const routedComponents = [PettyCashLedgerTransactionsComponent,
   PettyCashLedgerComponent, PettyCashFundsTransactionsComponent];
