import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TotalDataService {
  path = {
    submitTotal: 'milk/total'
  };
  constructor(private http: HttpService) { }

  public submitTotal(data): Observable<any> {
    return this.http.post(this.path.submitTotal, data);
  }

}
