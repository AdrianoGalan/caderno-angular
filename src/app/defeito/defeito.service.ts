import { Url } from 'url';
import { take, first } from 'rxjs';
import { Defeito } from './../model/defeito';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DefeitoService {

  private readonly API = `${environment.API}api/defeitos/`

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Defeito[]>(this.API).pipe(take(1));
  }



  insert(obj: Defeito) {
    return this.http
      .post<Url>(this.API, obj)
      .pipe(first());
  }

  update(obj: Defeito) {
    return this.http
      .put<URL>(`${this.API}update`, obj)
      .pipe(first());
  }


}
