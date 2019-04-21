import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MilkDataService {
path = {
  add: 'milk/add'
};
  constructor(private http: HttpService) { }
  public add(milk): Observable<any> {
    return this.http.post(this.path.add, milk);
  }
}
