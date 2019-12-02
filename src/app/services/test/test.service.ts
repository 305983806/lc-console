import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  greetingUrl = '/test/test';

  constructor(
    private http: HttpClient
  ) { }

  getConfig() {
    return this.http.get<Config>(
      this.greetingUrl,
      {
        observe: 'response'
      }).pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backed returned code ${error.status}, ` + `body was: ${error.error}` + `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later');
  }
}

export interface Config {
  testUrl: string;
}
