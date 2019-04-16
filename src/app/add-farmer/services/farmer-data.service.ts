import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmerDataService {

  private path = {
    addFarmer: 'user/create'
  };

  constructor(private http: HttpService) { }

  public addFarmer(user): Observable<any> {
    user.role = 'Farmer';
    user.status = 'Active';
    return this.http.post(this.path.addFarmer, user);
  }

}
