import { Component, OnInit } from '@angular/core';
import { LedgerCategoryService } from './ledger-category.service';
import { LedgerCategory } from '../entities/LedgerCategory';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ledger-category',
  templateUrl: './ledger-category.component.html',
  styleUrls: ['./ledger-category.component.css']
})
export class LedgerCategoryComponent implements OnInit {
  ledgerCategories: Array<LedgerCategory>;
  constructor(private lcs: LedgerCategoryService, private modalService: NgbModal ) { }

  ngOnInit() {
    this.getCategories();
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
     console.log(result);
    }, (reason) => {
       console.log(reason);
    });
  }

  getCategories() {
    this.lcs.getCategories().subscribe(res => {
      this.ledgerCategories = res.json() as Array<LedgerCategory>;
      console.log(this.ledgerCategories);
    });
  }

}
