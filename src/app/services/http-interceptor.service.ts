import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/do';

import { BehaviorSubject } from 'rxjs';
import { switchMap, filter, take, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );
  private isRefreshingToken = false;
  constructor(

  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(this.setAuthorizationHeader(request))
    .pipe(catchError(error => {
        if (error instanceof HttpErrorResponse) {
           console.log(error.error);
            return Observable.throw(error.error);
        }
      }));
  }

  private setAuthorizationHeader(req: HttpRequest<any>): HttpRequest<any> {
    // const token = 'abd';
    // return req.clone({
    //   withCredentials: true,
    //   // setHeaders: { Authorization: `Bearer ${token}`, Pragma: `no-cache` }
    // });
    return req;
  }

}
