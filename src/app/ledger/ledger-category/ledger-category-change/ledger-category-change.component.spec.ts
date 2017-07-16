import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerCategoryChangeComponent } from './ledger-category-change.component';

describe('LedgerCategoryChangeComponent', () => {
  let component: LedgerCategoryChangeComponent;
  let fixture: ComponentFixture<LedgerCategoryChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedgerCategoryChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgerCategoryChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
