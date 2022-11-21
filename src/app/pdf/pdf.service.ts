import { take } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  private readonly API = `${environment.API}api/pdf/`

  constructor(private http: HttpClient) { }

  gerar() {
    return this.http.get(`${this.API}gerar`).pipe(take(1));
  }







}
