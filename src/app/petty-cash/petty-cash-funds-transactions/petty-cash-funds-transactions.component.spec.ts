import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PettyCashFundsTransactionsComponent } from './petty-cash-funds-transactions.component';

describe('PettyCashFundsTransactionsComponent', () => {
  let component: PettyCashFundsTransactionsComponent;
  let fixture: ComponentFixture<PettyCashFundsTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PettyCashFundsTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PettyCashFundsTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
