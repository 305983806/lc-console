import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class NoopInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log(event.status);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  private handleError(event: HttpResponse<any> | HttpErrorResponse): Observable<any> {
    // TODO 处理一些能用操作
    this.router.navigate(
      [ 'exception', {
        status: event.status
      }],
      { skipLocationChange: false });
    return of(event);
  }
}
