import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PettyCashLedgerTransactionsComponent } from './petty-cash-ledger-transactions.component';

describe('PettyCashLedgerTransactionsComponent', () => {
  let component: PettyCashLedgerTransactionsComponent;
  let fixture: ComponentFixture<PettyCashLedgerTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PettyCashLedgerTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PettyCashLedgerTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
