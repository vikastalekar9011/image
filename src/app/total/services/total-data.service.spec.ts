import { TestBed } from '@angular/core/testing';

import { TotalDataService } from './total-data.service';

describe('TotalDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TotalDataService = TestBed.get(TotalDataService);
    expect(service).toBeTruthy();
  });
});
