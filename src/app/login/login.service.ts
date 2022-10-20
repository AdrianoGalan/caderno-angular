import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';

import { UsuarioLogin } from './../model/usuarioLogin';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly API = `${environment.API}login`;

  constructor(private httpClient: HttpClient, private router: Router) { }

  logar(usuario: UsuarioLogin): Observable<any> {

    return this.httpClient
      .post<any>(this.API, usuario, { observe: 'response' })
      .pipe(take(1));
  }
}
