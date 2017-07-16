import { Component, OnInit } from '@angular/core';
import { PettyCashLedgerService } from '../petty-cash-ledger.service';
import { PCLedger } from '../entities/PCLedger';

@Component({
  selector: 'app-petty-cash-ledger',
  templateUrl: './petty-cash-ledger.component.html',
  styleUrls: ['./petty-cash-ledger.component.css']
})
export class PettyCashLedgerComponent implements OnInit {
  pcledgers: Array<PCLedger>;
  constructor(private ls: PettyCashLedgerService) { }

  ngOnInit() {
    this.getPettyCashLedgers();
  }

   getPettyCashLedgers() {
    this.ls.getPettyCashLedgers().subscribe(res => {
      this.pcledgers = res.json() as  Array<PCLedger>;
      console.log(this.pcledgers);
    });
 }
}
