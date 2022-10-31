import { Url } from 'url';
import { take, first } from 'rxjs';
import { Maquina } from './../model/maquina';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MaquinaService {

  private readonly API = `${environment.API}api/maquinas/`

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Maquina[]>(this.API).pipe(take(1));
  }

  getBySigla(sigla: string){
    return this.http.get<Maquina>(`${this.API}/${sigla}`).pipe(take(1));
  }



  insert(obj: Maquina) {
    return this.http
      .post<Url>(this.API, obj)
      .pipe(first());
  }

  update(obj: Maquina) {
    return this.http
      .put<URL>(`${this.API}update`, obj)
      .pipe(first());
  }


}
