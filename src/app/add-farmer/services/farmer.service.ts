import { Injectable } from '@angular/core';
import { FarmerDataService } from './farmer-data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  constructor(private dataService: FarmerDataService) { }

  public addFarmer(user): Observable<any> {
    return this.dataService.addFarmer(user);
  }
}
