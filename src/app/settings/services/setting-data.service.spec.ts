import { TestBed } from '@angular/core/testing';

import { SettingDataService } from './setting-data.service';

describe('SettingDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SettingDataService = TestBed.get(SettingDataService);
    expect(service).toBeTruthy();
  });
});
