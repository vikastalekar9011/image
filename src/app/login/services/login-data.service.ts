import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {
  private path = {
    getAll: 'users/getAll',
    login: 'users/login'
  };
  constructor(private httpData: HttpService) {
  }
  public loginold(user): Observable<any> {
    return this.httpData.post(this.path.login, user);
  }
  public login(user): Observable<any> {
    return this.httpData.get(this.path.getAll, user);
  }
}
