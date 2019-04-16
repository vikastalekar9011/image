import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmerListDataService {
  private path = {
    listFarmers: 'user/getAll'
  };
  constructor(private http: HttpService) { }
  public listFarmer(): Observable<any> {
    console.log('get list');
    return this.http.get(this.path.listFarmers);
  }
}
