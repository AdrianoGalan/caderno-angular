import { Url } from 'url';
import { take, first } from 'rxjs';
import { Procedimento } from './../model/procedimento';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProcedimentoService {

  private readonly API = `${environment.API}api/procedimentos/`

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Procedimento[]>(this.API).pipe(take(1));
  }



  insert(obj: Procedimento) {
    return this.http
      .post<Url>(this.API, obj)
      .pipe(first());
  }

  update(obj: Procedimento) {
    return this.http
      .put<URL>(`${this.API}update`, obj)
      .pipe(first());
  }


}
