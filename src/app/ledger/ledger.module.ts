import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LedgerRoutingModule, routedComponents } from './ledger.route';
import { LedgerService } from './ledger.service';
import { LedgerCategoryService } from './ledger-category/ledger-category.service';
import { LedgerCategoryChangeComponent } from './ledger-category/ledger-category-change/ledger-category-change.component';


@NgModule({
  imports: [
    CommonModule,
    LedgerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [routedComponents, LedgerCategoryChangeComponent],
  providers: [LedgerService, LedgerCategoryService]
})
export class LedgerModule { }
