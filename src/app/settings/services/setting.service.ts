import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingDataService } from './setting-data.service';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private dataService: SettingDataService) { }

  public getLocations(): Observable<any> {
    return this.dataService.getLocations();
  }
}
