import { Url } from 'url';
import { take, first } from 'rxjs';
import { Alarme } from 'src/app/model/alarme';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlarmeService {

  private readonly API = `${environment.API}api/alarmes/`

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Alarme[]>(this.API).pipe(take(1));
  }



  insert(obj: Alarme) {
    return this.http
      .post<Url>(this.API, obj)
      .pipe(first());
  }

  update(obj: Alarme) {
    return this.http
      .put<URL>(`${this.API}update`, obj)
      .pipe(first());
  }


}
