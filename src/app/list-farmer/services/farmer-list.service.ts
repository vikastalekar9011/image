import { Injectable } from '@angular/core';
import { FarmerListDataService } from './farmer-list-data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmerListService {

  constructor( private dataService: FarmerListDataService) { }

  public getList(): Observable<any> {
    return this.dataService.listFarmer();
  }
}
