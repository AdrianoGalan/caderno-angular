import { ErroInterceptor } from './erro.interceptor';
import { AuthInterceptor } from './auth.interceptor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthInterceptor,{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true},
    ErroInterceptor,{provide: HTTP_INTERCEPTORS, useClass: ErroInterceptor, multi:true}
  ],
})
export class InterceptorsModule { }
