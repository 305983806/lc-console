import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class NoopInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // TODO 提交请求至 api 之前，要做的逻辑
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        // TODO 处理 200 响应
          // TODO 判断 code 等于0，代表调用成功
          // TODO 判断 code 不等于0, 获得 body 中的 message
        if (event instanceof HttpResponse) {
          console.log(event.status);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  private handleError(event: HttpResponse<any> | HttpErrorResponse): Observable<any> {
    // TODO 处理 3xx、4xx、5xx 错误
    console.log(event);
    this.router.navigate(
      [ 'exception', {
        status: event.status
      }],
      { skipLocationChange: false });
    return of(event);
  }
}
