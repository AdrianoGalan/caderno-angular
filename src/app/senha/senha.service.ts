import { Url } from 'url';
import { take, first } from 'rxjs';
import { Senha } from './../model/senha';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenhaService {

  private readonly API = `${environment.API}api/senhas/`

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Senha[]>(this.API).pipe(take(1));
  }



  insert(obj: Senha) {
    return this.http
      .post<Url>(this.API, obj)
      .pipe(first());
  }

  update(obj: Senha) {
    return this.http
      .put<URL>(`${this.API}update`, obj)
      .pipe(first());
  }


}
