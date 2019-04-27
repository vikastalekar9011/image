import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TotalDataService } from './total-data.service';

@Injectable({
  providedIn: 'root'
})
export class TotalService {

  constructor(private totalDataService: TotalDataService) { }

  public submitTotal(totalData): Observable<any> {
    totalData.rate = 23;
    totalData.paid_status = 'Unpaid';
    totalData.amount = totalData.milk_quantity * 23;
    return this.totalDataService.submitTotal(totalData);
  }
}
