import { TestBed } from '@angular/core/testing';

import { MilkDataService } from './milk-data.service';

describe('MilkDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MilkDataService = TestBed.get(MilkDataService);
    expect(service).toBeTruthy();
  });
});
