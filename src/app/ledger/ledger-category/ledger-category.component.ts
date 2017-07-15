import { Component, OnInit } from '@angular/core';
import { LedgerCategoryService } from './ledger-category.service';
import { LedgerCategory } from '../entities/LedgerCategory';

@Component({
  selector: 'app-ledger-category',
  templateUrl: './ledger-category.component.html',
  styleUrls: ['./ledger-category.component.css']
})
export class LedgerCategoryComponent implements OnInit {
  ledgerCategories: Array<LedgerCategory>;
  constructor(private lcs: LedgerCategoryService ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.lcs.getCategories().subscribe(res => {
      this.ledgerCategories = res.json() as Array<LedgerCategory>;
      console.log(this.ledgerCategories);
    });
  }

}
