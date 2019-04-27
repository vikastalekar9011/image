import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class SettingDataService {

  private path = {
    getLocations : 'location/list'
  };
  constructor(private http: HttpService) { }

  public getLocations(): Observable<any> {
    return this.http.get(this.path.getLocations, {});
  }
}
