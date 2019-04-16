import { TestBed } from '@angular/core/testing';

import { FarmerDataService } from './farmer-data.service';

describe('FarmerDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FarmerDataService = TestBed.get(FarmerDataService);
    expect(service).toBeTruthy();
  });
});
