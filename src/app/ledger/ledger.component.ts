import { Component, OnInit } from '@angular/core';
import { LedgerService } from './ledger.service';
import { LedgerAccount } from './entities/LedgerAccount';
@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {
Ledgers: Array<LedgerAccount>;
  constructor(private ls: LedgerService) { }

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
