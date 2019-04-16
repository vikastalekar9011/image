import { TestBed } from '@angular/core/testing';

import { FarmerListDataService } from './farmer-list-data.service';

describe('FarmerListDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FarmerListDataService = TestBed.get(FarmerListDataService);
    expect(service).toBeTruthy();
  });
});
