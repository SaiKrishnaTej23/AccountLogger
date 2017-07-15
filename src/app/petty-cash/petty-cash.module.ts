import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PettyCRoutingModule, routedComponents } from './petty-cash.route';
import { PettyCashLedgerService } from './petty-cash-ledger.service';

@NgModule({
  imports: [
    CommonModule,
    PettyCRoutingModule
  ],
  declarations: [routedComponents],
  providers: [PettyCashLedgerService]
})
export class PettyCashModule { }
