import { Component, OnInit } from '@angular/core';
import { PettyCashLedgerService } from '../petty-cash-ledger.service';
import { LedgerAccount } from '../entities/LedgerAccount';

@Component({
  selector: 'app-petty-cash-ledger-transactions',
  templateUrl: './petty-cash-ledger-transactions.component.html',
  styleUrls: ['./petty-cash-ledger-transactions.component.css']
})
export class PettyCashLedgerTransactionsComponent implements OnInit {
Ledgers: Array<LedgerAccount>;
  constructor(private ls: PettyCashLedgerService) { }

   ngOnInit() {
    this.getLedgers();
  }

  getLedgers() {
    this.ls.getLedgers().subscribe(res => {
      this.Ledgers = res.json() as  Array<LedgerAccount>;
      console.log(this.Ledgers);
    });
 }

}
