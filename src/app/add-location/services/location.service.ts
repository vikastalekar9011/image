import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationDataService } from './location-data.service';
@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private dataService: LocationDataService) { }
  public add(location): Observable<any> {
    return this.dataService.add(location);
  }
}
