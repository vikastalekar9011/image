import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDataService } from './login-data.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpData: LoginDataService) { }
  public login(user): Observable<any> {
    return this.httpData.login(user);
  }
}
