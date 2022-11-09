import { Usuario } from './../model/usuairo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { first, Observable, take } from 'rxjs';
import { Url } from 'url';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly API = `${environment.API}api/usuarios/`

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Usuario[]>(this.API).pipe(take(1));
  }

  getUsuarioByEmail(email: string): Observable<Usuario> {

    return this.http.get<Usuario>(`${this.API}email/${email}`).pipe(take(1));

  }

  insert(usuario: Usuario) {
    return this.http
      .post<Url>(this.API, usuario)
      .pipe(first());
  }

  update(usuario: Usuario) {
    return this.http
      .put<URL>(`${this.API}update`, usuario)
      .pipe(first());
  }

  reset(usuario: Usuario) {
    return this.http
      .put<URL>(`${this.API}reset`, usuario)
      .pipe(first());
  }


}
