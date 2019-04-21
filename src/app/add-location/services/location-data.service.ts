import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationDataService {
  path = {
    add: 'location/add'
  };
  constructor(private http: HttpService) { }

  public add(location): Observable<any> {
    return this.http.post(this.path.add, location);
  }
}
