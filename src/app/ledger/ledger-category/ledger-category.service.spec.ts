import { TestBed, inject } from '@angular/core/testing';

import { LedgerCategoryService } from './ledger-category.service';

describe('LedgerCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LedgerCategoryService]
    });
  });

  it('should be created', inject([LedgerCategoryService], (service: LedgerCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
