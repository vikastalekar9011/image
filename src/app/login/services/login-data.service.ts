import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {
  private path = {
    getAll: 'user/getAll',
    login: 'user/login'
  };
  constructor(private httpData: HttpService) {
  }
  public login(user): Observable<any> {
    // alert(user);
    return this.httpData.post(this.path.login, user, {} );
  }
  public loginold(user): Observable<any> {
    return this.httpData.get(this.path.getAll, user);
  }
}
