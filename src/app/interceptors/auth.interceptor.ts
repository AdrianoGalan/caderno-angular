import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authservice: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (this.authservice.getTokenUser) {
      const authReq = request.clone({ headers: request.headers.set('Authorization',this.authservice.getTokenUser) })
      return next.handle(authReq);
    } else {
      return next.handle(request);
    }


  }
}
