import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';

export interface IRequestOptions {
  headers?: HttpHeaders;
  observe?: 'body';
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: any | 'json';
  withCredentials?: boolean;
  body?: any;
}
export function HttpServiceCreator(http: HttpClient) {
  return new HttpService(http);
}
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }
  public get<T>(url: string, options?: IRequestOptions): Observable<T> {
    url = `${environment.API_PATH}/${url}`;
    return this.http.get<T>(url, options)
      .pipe(
        catchError(this.handleError)
      );
  }

  public post<T>(url: string, params: Object, options?: IRequestOptions): Observable<T> {
    url = `${environment.API_PATH}/${url}`;
    return this.http.post<T>(url, params, options)
      .pipe(
        catchError(this.handleError)
      );
  }

  public put<T>(url: string, params: Object, options?: IRequestOptions): Observable<T> {
    url = `${environment.API_PATH}/${url}`;
    return this.http.put<T>(url, params, options)
      .pipe(
        catchError(this.handleError)
      );
  }

  public delete<T>(url: string, options?: IRequestOptions): Observable<T> {
    url = `${environment.API_PATH}/${url}`;
    return this.http.delete<T>(url, options)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      // console.error(
      //   `Backend returned code ${error.status}, ` +
      //   `body was: ${error.error}`);
      // console.log(JSON.stringify(error.error));
    }
    // return an observable with a user-facing error message
    return throwError(error);
  }
}
