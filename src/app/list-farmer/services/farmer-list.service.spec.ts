import { TestBed } from '@angular/core/testing';

import { FarmerListService } from './farmer-list.service';

describe('FarmerListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FarmerListService = TestBed.get(FarmerListService);
    expect(service).toBeTruthy();
  });
});
