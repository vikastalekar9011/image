import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MilkDataService } from './milk-data.service';

@Injectable({
  providedIn: 'root'
})
export class MilkService {

  constructor(private dataService: MilkDataService) { }

  public add(milk): Observable<any> {
    milk.rate = 23;
    milk.paid_status = 'Unpaid';
    return this.dataService.add(milk);
  }
}
