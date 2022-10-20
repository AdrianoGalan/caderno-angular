import { Usuario } from './../model/usuairo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, take } from 'rxjs';
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

  getUsuarioByEmail(email: string){

    return this.http.get<Usuario>(`${this.API}email/${email}`).pipe(take(1));

  }


}
