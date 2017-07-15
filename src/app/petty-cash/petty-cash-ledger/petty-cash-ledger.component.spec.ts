import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PettyCashLedgerComponent } from './petty-cash-ledger.component';

describe('PettyCashLedgerComponent', () => {
  let component: PettyCashLedgerComponent;
  let fixture: ComponentFixture<PettyCashLedgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PettyCashLedgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PettyCashLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
